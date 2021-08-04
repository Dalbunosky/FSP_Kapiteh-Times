// This pages shows all accepted upcoming meetups and your profile details
import React from 'react';
import ProfileBar from './parts/profile_pres';

class EditPassword extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
        this.state = {
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
    this.props.clearMessage();
    this.props.clearErrors();
    this.setState({success: false});
  }

  handleSubmit(e) {
    // e.preventDefault();

    // const user = Object.assign({}, this.state);
    // this.props.processForm(user);

    let formData = new FormData();
    formData.append('user[id]', this.state.id);
    formData.append('user[name]', this.state.name);
    formData.append('user[email]', this.state.email);
    if (this.state.imageFile) {
      formData.append('user[profile_pic]', this.state.imageFile);
    }
    this.props.processForm(formData)
    .then(() => this.setState({success: true}), () => this.setState({success: false}));

  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const credentials = {old_password: this.state.oldPassword, new_password: this.state.newPassword};
  //   const passwords = Object.assign({}, credentials);
  //   this.props.processForm(passwords)
  //   .then(
  //     // () => this.props.history.push(`/meetups`)
  //     console.log("HIIIIIIII", this.props)
  //     .then(
  //       () => this.props.receiveMessage("Welcome back!")
  //       // .then(console.log(this.props))
  //     ), () => {}
  //   );
  // }

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
    const saveSuccess = bool => ( bool ? <p className="red" style={{display: "inline"}}><strong>Password successfully changed!</strong></p> : "");
    const toggleInputType = toggleText => ( toggleText === "Show" ? "password" : "text");
    // const confirmPasswordWarning = (pw1, pw2) => ( pw1 != pw2 ? "Password must match!" : "");
    const confirmPasswordButton = (pw1, pw2) => {
      if(pw1 === pw2 && pw1 != ""){ return(<div><input className="session-submit button" type="submit" value="Sign Up!" /></div>)}
      else if(pw1 != pw2){return(<p className="signinup-form-container red">You can't submit unless your new passwords match!</p>)}
      else{return(<p className="signinup-form-container red">You can't submit without a password!</p>)}}

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
              {saveSuccess(this.state.success)}
            </form>
            {this.renderErrors()}
        </div>
      </div>
    );
  }
}

export default EditPassword;
