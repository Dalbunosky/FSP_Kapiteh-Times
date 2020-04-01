import React from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
    this.demoHost = this.demoHost.bind(this);
    this.demoAdmin = this.demoAdmin.bind(this);
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
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {return(
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>{error}</li>
      ))}
    </ul>
  )}

	demoUser(e) {
    e.preventDefault();
    this.setState({
      email: "DemoUser@fake.com",
      password: "11111111"
    })
	};

	demoHost(e) {
    e.preventDefault();
		this.setState({
      email: "DemoHost@fake.com",
      password: "`1234567"
    })
  };

	demoAdmin(e) {
    e.preventDefault();
		this.setState({
      email: "DemoAdmin@fake.com",
      password: "`1234567"
    })
  };
  
  render() {
    return (
      <div className="signinup-form-container">
        <form onSubmit={this.handleSubmit} className="signinup-form-box">
          <h3>Welcome to Kapiteh Times!</h3>
          <br/>
          Please Sign In below or <Link to="/signup">Sign Up if you don't have an account with us yet!</Link>
          {this.renderErrors()}

          <div className="signinup-form">

            <br/>
            <label>
              <p className="signinup-title">Email:</p>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signinup-input"
              />
            </label>

            <br/>
            <label>
              <p className="signinup-title">Password:</p>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signinup-input"
            />
            </label>
            <br/>
            <div className="demo-signins">
              <button className="nav-link-item" onClick={this.demoUser}>Demo User</button>
              <button className="nav-link-item" onClick={this.demoHost}>Demo Host</button>
              <button className="nav-link-item" onClick={this.demoAdmin}>Demo Admin</button>
            </div>
            <input className="session-submit" type="submit" value="Sign In!" />

          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
