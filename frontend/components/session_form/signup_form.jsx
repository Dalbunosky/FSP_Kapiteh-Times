// import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

// import { signup } from '../../actions/session_actions';
// import SessionForm from './session_form';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
      password2: '',
      home_city: '',
      story: '',

      // errors: this.setErrors(this.props.errors),
      pwDisplay: "Show"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.pwShowHide = this.pwShowHide.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
      // const user = {
      //   name: this.state.name,
      //   email: this.state.email,
      //   phone: this.state.phone,
      //   password: this.state.password,
      //   home_city: this.state.home_city,
      //   story: this.state.story
      // };
      // this.props.processForm(user);

      const user = new FormData();
      if (this.state.photoFile) {
        user.append('user[profile_pic]', this.state.photoFile);
      }
      user.append('user[name]', this.state.name);
      user.append('user[password]', this.state.password);
      user.append('user[email]', this.state.email);
      user.append('user[phone]', this.state.phone);
      user.append('user[story]', this.state.story);
      user.append('user[home_city]', this.state.home_city);
      this.props.processForm(user)
  }

  renderErrors() {return(
    <ul className="red">
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}><strong>{error}!</strong></li>
      ))}
    </ul>
  )}

  pwShowHide(e){
    e.preventDefault();
    this.setState({
      pwDisplay: ( this.state.pwDisplay === "Show" ? "Hide" : "Show")
    })
  };

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
    }
  }

  deleteFile(){
    return e => {
      this.setState({ imageURL: "", imageFile: null, fileName: "" });
    }
  }

  render() {
    // console.log("this.state", this.state);
    const toggleInputType = toggleText => ( toggleText === "Show" ? "password" : "text");
    const confirmPasswordWarning = (pw1, pw2) => ( pw1 != pw2 ? "Password must match!" : "");
    const confirmPasswordButton = (pw1, pw2) => {
      if(pw1 === pw2 && pw1 != ""){ return(<div><input className="session-submit button" type="submit" value="Sign Up!" /></div>)}
      else { return(<h3 className="signinup-form-container">You can't submit unless your passwords match!</h3>)}};
    const deletePic = () => this.state.imageURL ? <button onClick={this.deleteFile()}>Remove Picture</button> : "";
    return (
      <div className="profile-changes">
        <h3>Welcome to Kapiteh Times!</h3>
        <br/>
        Please Sign Up below or <Link to="/signin">Sign In if you have an account with us already!</Link>
        {/* {this.renderErrors()} */}
        <form onSubmit={this.handleSubmit} className="full-profile">
          <div className="profile-details">
            <div className="left">
              <label className="data-entry">
                <p className="signinup-title">Name:* How you want to be addressed at Meetups</p>
                <input className="text-input" type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  required/>
              </label>

              <label className="data-entry">
                <p className="signinup-title">Email.* This will be your login as well as method of contact.</p>
                <input className="text-input" type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  required/>
              </label>

              <label className="data-entry">
                <p className="signinup-title">Phone:</p>
                <input className="text-input" type="number"
                  value={this.state.phone}
                  onChange={this.update('phone')}
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  // required
                />
              </label>

              <label className="data-entry">
                <p className="signinup-title">Password:*</p>
                <input className="text-input" type={toggleInputType(this.state.pwDisplay)}
                  value={this.state.password}
                  onChange={this.update('password')}
                  required
                />
                <button className="togglePW" onClick={this.pwShowHide}>{this.state.pwDisplay}</button>
              </label>

              <label className="data-entry">
                <p className="signinup-title">Confirm Password:</p>
                <input className="text-input" type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  required
                />
              </label>

              <p>{confirmPasswordWarning(this.state.password, this.state.password2)}</p>

              <label className="data-entry">
                <p className="signinup-title">Where are you now? Which metropolitan area/region? <br/> Not the exact suburb, but the main city/region you are associated with*</p>
                <input className="text-input" type="text"
                  value={this.state.home_city}
                  onChange={this.update('home_city')}
                  required/>
              </label>

              <label className="data-entry">
              <p className="signinup-title">What's your story? Gotta have one if you want to become a host!</p>
              <textarea className="text-input"
                rows="4" cols="50" 
                value={this.state.story}
                onChange={this.update('story')}/>
              </label>
            </div>
            <div className="right">
              <p>A picture of yourself.<br/>Optional, until you become a host.</p>
              <label for="file-upload" className="button">Select Picture</label>
              <input id="file-upload" type="file" onChange={this.updateFile()} />
              <p className="cutoff">{this.state.fileName}</p>
              <img className="preview" src={this.state.imageURL} />
              {deletePic()}

              <p>Because how else would people know it's you?</p>
              <br/>
              <br/>

              {this.renderErrors()}
            </div>
            {confirmPasswordButton(this.state.password, this.state.password2)}
            {/* <input className="session-submit" type="submit" value="Sign Up!" /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
