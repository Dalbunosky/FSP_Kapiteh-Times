// This pages shows all accepted upcoming meetups and your profile details
import React from 'react';
import ProfileBar from './parts/profile_pres';

class EditPassword extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.currentUser)
        this.state = {
            // id: this.props.currentUser.id,
            errors: this.props.errors,
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
            success: false,
            pwDisplay: "Show"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.pwShowHide = this.pwShowHide.bind(this);
    }

  componentDidMount(){
    this.props.clearErrors();
  }

  componentWillUnmount(){
    this.props.clearErrors();
    this.setState({success: false});
    if(!!this.props.session){
      this.props.clearMessage();
    }
    if(this.props.message === "Password change successful. You will be logged off. Please re-login with new password." && this.state.success){
      this.props.signout();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const credentials = {
      id: this.props.currentUser.id, 
      email: this.props.currentUser.email,
      password: this.state.oldPassword, 
      new_password: this.state.newPassword
    };
    const passwords = Object.assign({}, credentials);

    // console.log(passwords);
    this.props.processForm(passwords)
    .then(() => this.setState({success: true}), () => this.setState({success: false}));
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  pwShowHide(e){
    e.preventDefault();
    this.setState({
      pwDisplay: ( this.state.pwDisplay === "Show" ? "Hide" : "Show")
    })
  };

// RENDERS

  renderErrors() {return(
    <ul className="red">
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}><strong>{error}!</strong></li>
      ))}
    </ul>
  )}


  render() {
    console.log(this.props.message);
    console.log(this.state.success);
    const saveSuccess = bool => ( bool ? <p className="red" style={{display: "inline"}}><strong>Password successfully changed!</strong></p> : "");
    const toggleInputType = toggleText => ( toggleText === "Show" ? "password" : "text");
    // const confirmPasswordWarning = (pw1, pw2) => ( pw1 != pw2 ? "Password must match!" : "");
    const confirmPasswordButton = (pw1, pw2) => {
      if(pw1 === pw2 && pw1.length > 7){ return(<div><input className="session-submit button" type="submit" value="Change Password" /></div>)}
      else if(pw1 === ""){return(<p className="signinup-form-container red">You can't submit without a new password!</p>)}
      else if(pw1 != pw2){return(<p className="signinup-form-container red">You can't submit unless your new passwords match!</p>)}
      else{return(<p className="signinup-form-container red">Your new password needs to be longer!</p>)}
    }

    return (
      <div className="edit-profile">
        <ProfileBar props={this.props.currentUser}  type="edit"/>
        <div className="password-changes">
            <h1>Edit Account Details</h1>
            {/* {this.renderErrors()} */}
            <form onSubmit={this.handleSubmit} className="full-profile">
                <div className="profile-details">
                    <div className="left">

                        <label className="data-entry">
                            <p className="signinup-title">Old Password:</p>
                            <input className="text-input" type="password"
                            value={this.state.oldPassword}
                            onChange={this.update('oldPassword')}
                            required
                            />
                        </label>

                        <label className="data-entry">
                            <p className="signinup-title">New Password:</p>
                            <p style={{fontSize: "12px"}}>(at least 8 characters long)</p>
                            <input className="text-input" type={toggleInputType(this.state.pwDisplay)}
                            value={this.state.newPassword}
                            onChange={this.update('newPassword')}
                            required
                            />
                            <button className="togglePW" onClick={this.pwShowHide}>{this.state.pwDisplay}</button>
                        </label>

                        <label className="data-entry">
                            <p className="signinup-title">Confirm New Password:</p>
                            <input className="text-input" type="password"
                            value={this.state.confirmPassword}
                            onChange={this.update('confirmPassword')}
                            required
                            />
                        </label>

                        {/* <p>{confirmPasswordWarning(this.state.newPassword, this.state.confirmPassword)}</p> */}

                    </div>
                    {confirmPasswordButton(this.state.newPassword, this.state.confirmPassword)}
                    {saveSuccess(this.state.success)}
                </div>
            </form>
            {this.renderErrors()}
        </div>
      </div>
    );
  }
}

export default EditPassword;
