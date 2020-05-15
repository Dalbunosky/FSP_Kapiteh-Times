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
      const user = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        password: this.state.password,
        home_city: this.state.home_city,
        story: this.state.story
      };
      this.props.processForm(user);
  }

  renderErrors() {
    return(
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>{error}</li>
      ))}
    </ul>
  )}

  pwShowHide(e){
    e.preventDefault();
    this.setState({
      pwDisplay: ( this.state.pwDisplay === "Show" ? "Hide" : "Show")
    })
  };

  render() {
    const toggleInputType = toggleText => ( toggleText === "Show" ? "password" : "text");
    const confirmPasswordWarning = (pw1, pw2) => ( pw1 != pw2 ? "Password must match!" : "");
    const confirmPasswordButton = (pw1, pw2) => {
      console.log(pw1);
      if(pw1 === pw2 && pw1 != ""){ return(<input className="session-submit" type="submit" value="Sign Up!" />)}
      else { return(<h3 className="signinup-form-container">You can't submit unless your passwords match!</h3>)}};
    console.log(this.state.errors);
    console.log(this.props.errors);
    return (
      <div className="signinup-form-container">
        <form onSubmit={this.handleSubmit} className="signinup-form-box">
          <h3>Welcome to Kapiteh Times!</h3>
          <br/>
          Please Sign Up below or <Link to="/signin">Sign In if you have an account with us already!</Link>
          {this.renderErrors()}

          <div className="signinup-form">

            <br/>
            <label>
              <p className="signinup-title">Name:* How you want to be addressed at Meetups</p>
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="signinup-input"
                required/>
            </label>

            <br/>
            <label>
              <p className="signinup-title">Email.* This will be your login as well as method of contact.</p>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signinup-input"
                required/>
            </label>

            <br/>
            <label>
              <p className="signinup-title">Phone:</p>
              <input type="number"
                value={this.state.phone}
                onChange={this.update('phone')}
                className="signinup-input"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                // required
              />
            </label>

            <br/>
            <label>
              <p className="signinup-title">Password:*</p>
              <input type={toggleInputType(this.state.pwDisplay)}
                value={this.state.password}
                onChange={this.update('password')}
                className="signinup-input"
                required
              />
              <button className="togglePW" onClick={this.pwShowHide}>{this.state.pwDisplay}</button>
            </label>

            <br/>
            <label>
              <p className="signinup-title">Confirm Password:</p>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                className="signinup-input"
                required
              />
            </label>
            <p>{confirmPasswordWarning(this.state.password, this.state.password2)}</p>

            <br/>
            <label>
              <p className="signinup-title">Where are you now? Which metropolitan area/region? <br/> Not the exact suburb, but the main city/region you are associated with*</p>
              <input type="text"
                value={this.state.home_city}
                onChange={this.update('home_city')}
                className="signinup-input"
                required/>
            </label>

            <br/>
            <label>
            <p className="signinup-title">What's your story? Gotta have one if you want to become a host!</p>
            <textarea rows="4" cols="50" 
              value={this.state.story}
              onChange={this.update('story')}/>
            </label>
            <br/>
            {confirmPasswordButton(this.state.password, this.state.password2)}
            {/* <input className="session-submit" type="submit" value="Sign Up!" /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
