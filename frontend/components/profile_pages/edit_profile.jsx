// This pages shows all accepted upcoming meetups and your profile details
import React from 'react';
import ProfileBar from './parts/profile_pres';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
        this.state = {
            errors: this.props.errors,
            id: this.props.currentUser.id,
            name: this.props.currentUser.name,
            email: this.props.currentUser.email,
            phone: this.props.currentUser.phone,
            story: this.props.currentUser.story,
            home_city: this.props.currentUser.home_city,
            email_subscription: this.props.currentUser.email_subscription,
            host_status: this.props.currentUser.host_status,
            fileName: "",
            modal_display: "noshow",
            success: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseAcct = this.handleCloseAcct.bind(this);
        this.toggleEmailSub = this.toggleEmailSub.bind(this);
        this.kingYourself = this.kingYourself.bind(this);
        this.confirmCancel = this.confirmCancel.bind(this);
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
  }

  confirmCancel(e){
    e.preventDefault();
    // this.setState({ modal_display: "HFGDFGF" });
    // return e => 
    this.setState({
      modal_display: ((this.state.modal_display==="noshow") ? "yesshow" : "noshow")
    });
  }

  toggleEmailSub(e) {
    e.preventDefault();
    this.setState({ email_subscription: !this.state.email_subscription});
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  };

  kingYourself(e) {
    e.preventDefault();
    this.setState({ host_status: !this.state.host_status});
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  };

  handleSubmit(e) {
    // e.preventDefault();

    // const user = Object.assign({}, this.state);
    // this.props.processForm(user);

    let formData = new FormData();
    formData.append('user[id]', this.state.id);
    formData.append('user[name]', this.state.name);
    formData.append('user[email]', this.state.email);
    formData.append('user[phone]', this.state.phone);
    formData.append('user[story]', this.state.story);
    formData.append('user[home_city]', this.state.home_city);
    formData.append('user[email_subscription]', this.state.email_subscription);
    formData.append('user[host_status]', this.state.host_status);
    if (this.state.imageFile) {
      formData.append('user[profile_pic]', this.state.imageFile);
    }
    this.props.processForm(formData)
    .then(() => this.setState({success: true}), () => this.setState({success: false}));

  }

  handleCloseAcct(e) {
    e.preventDefault();
    this.props.closeAccount()
    .then(
      () => this.props.history.push(`/`)
      .then(
        () => this.props.receiveMessage("Thank you for trying Kapiteh Times!")
      ), () => {}
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  updateFile(){
    return e => {
      const reader = new FileReader();
      const file = e.currentTarget.files[0];
      reader.onloadend = () =>
        this.setState({ imageURL: reader.result, imageFile: file, fileName: file.name });
  
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ imageURL: "", imageFile: null });
      }
      // console.log(`file: ${file}`)
      // console.log(`file.name: ${file.name}`)
      // console.log(`file.name: ${this.state.fileName}`)
    }
  }

  deleteFile(){
    return e => {
        this.setState({ imageURL: "", imageFile: null, fileName: "" });
    }
  }

// RENDERS

  renderErrors() {return(
    <ul className="red">
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}><strong>{error}!</strong></li>
      ))}
    </ul>
  )}


  render() {
    // let modal_display = "noshow";
    const yepNope = bool => ( bool ? "Yep!" : "Nope!");
    const amIHost = bool => ( bool ? <a href="#/meetups/new" className="button">Yep! Let's host!</a> : <a href="#/hosting" className="button">Not Yet! But I want to be!</a>);
    const saveSuccess = bool => ( bool ? <p className="red" style={{display: "inline"}}><strong>Save successful!</strong></p> : "");
    const deletePic = () => this.state.imageURL ? <button onClick={this.deleteFile()}>Remove Picture</button> : "";

    return (
      <div className="edit-profile">
        <ProfileBar props={this.props.currentUser}  type="edit"/>
        <div className="profile-changes">
          <div className="profile-right">
            <div className="profile-title">
              <h1>Edit Account Details</h1>
            </div>
            {/* {this.renderErrors()} */}
            <form onSubmit={this.handleSubmit} className="full-profile">
              <div className="profile-details">
                <div className="left">
                  <label className="data-entry">
                    <p className="signinup-title">Name:*</p>
                    <input className="text-input" type="text"
                        value={this.state.name}
                        onChange={this.update('name')}
                    />
                  </label>
                  <label className="data-entry">
                    <p className="signinup-title">Email:*</p>
                    <input className="text-input" type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                    />
                  </label>

                  <br/>
                  <label className="data-entry">
                    <p className="signinup-title">Phone:</p>
                    <input className="text-input" type="tel"
                        value={this.state.phone}
                        onChange={this.update('phone')}
                        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        // required
                    />
                  </label>

                  <br/>
                  <label className="data-entry">
                    <p className="signinup-title">Current Metro/Region:*</p>
                    <input className="text-input" type="text"
                        value={this.state.home_city}
                        onChange={this.update('home_city')}
                    />
                  </label>

                  <br/>
                  <label className="data-entry">
                    <p className="signinup-title">Story</p>
                    <textarea rows="4" cols="50" 
                      className="text-input"
                      value={this.state.story}
                      onChange={this.update('story')}
                    />   
                  </label>
                </div>
                <div className="right">
                  <p className="signinup-title">A picture of yourself.<br/>Optional, until you become a host.</p>

                  <label for="file-upload" className="button">Select File</label>
                  <input id="file-upload" type="file" onChange={this.updateFile()} />
                  <p className="cutoff">{this.state.fileName}</p>
                  <img className="preview" src={this.state.imageURL} />
                  {deletePic()}

                  {this.renderErrors()}
                </div>
              </div>
              <div className="change-password">
                  {/* <label className="data-entry">
                  <p className="signinup-title">Please type in old password to confirm</p>
                  <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="signinup-input"
                  />
                  </label>
                  <label className="data-entry">
                  <p className="signinup-title">Please type in new password</p>
                  <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="signinup-input"
                  />
                  </label>
                  <label className="data-entry">
                  <p className="signinup-title">Please type in new password again</p>
                  <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="signinup-input"
                  />
                  </label> */}
              </div>
              <input className="session-submit button" type="submit" value="Submit Changes" />
              {saveSuccess(this.state.success)}
            </form>

            <div className="profile-settings">
              {/* <label className="data-entry"> */}
                <h3 className="signinup-title">Need to change password?</h3>
                <p>Please have your current password ready.</p>
                <a className="button" href="#/password-change">Change Password</a>
              {/* </label> */}

              {/* <label className="data-entry"> */}
                <h3 className="signinup-title">Am I a host?</h3>
                <p>If you want to host your own meetup</p>
                {amIHost(this.state.host_status)}
              {/* </label> */}

              {/* <label className="data-entry"> */}
                <h3 className="signinup-title">Email Subscription:</h3>
                <p>Your email subscription is used to contact you when needed, in cases such as...</p>
                <button onClick={this.toggleEmailSub} >{yepNope(this.props.currentUser.email_subscription)}</button>
              {/* </label> */}

              {/* <label className="data-entry"> */}
                <h3 className="signinup-title">Delete Account</h3>
                <p>You don't want to have an account anymore?</p>
                <button onClick={this.confirmCancel} >Thank you for trying Kapiteh Times!</button>
              {/* </label> */}

              <div className={this.state.modal_display}>
                <div className="modal-screen"></div>
                <div className="modal-confirmation">
                  <p>Are you sure you want to cancel the account?</p>
                  <button onClick={this.confirmCancel}>No! I clicked on accident!</button>
                  <button onClick={this.handleCloseAcct}>Yes.</button>
                </div>
              </div>

              {/* <button onClick={this.kingYourself} >{yepNope(this.props.currentUser.host_status)}</button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
