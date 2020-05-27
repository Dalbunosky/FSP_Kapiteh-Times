// This pages shows all accepted upcoming meetups and your profile details
import React from 'react';
import ProfileBar from './parts/profile_pres';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
        this.state = {
            id: this.props.currentUser.id,
            name: this.props.currentUser.name,
            email: this.props.currentUser.email,
            phone: this.props.currentUser.phone,
            story: this.props.currentUser.story,
            home_city: this.props.currentUser.home_city,
            email_subscription: this.props.currentUser.email_subscription,
            host_status: this.props.currentUser.host_status,
            // imageURL: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseAcct = this.handleCloseAcct.bind(this);
        this.toggleEmailSub = this.toggleEmailSub.bind(this);
        this.kingYourself = this.kingYourself.bind(this);
    }

  componentDidMount(){
    this.props.clearErrors();
  }

  componentWillUnmount() {
    this.props.clearErrors();
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
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);

  }

  handleCloseAcct(e) {
    e.preventDefault();
    this.props.closeAccount();
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
        this.setState({ imageURL: reader.result, imageFile: file });
  
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ imageURL: "", imageFile: null });
      }
    }
  }

// RENDERS

  renderErrors() {return(
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>{error}</li>
      ))}
    </ul>
  )}


  render() {
    console.log(this.state);
    const yepNope = bool => ( bool ? "Yep!" : "Nope!");
    const amIHost = bool => ( bool ? <a href="#/meetups/new">Yep! Let's host!</a> : <a href="#/hosting">Not Yet! But I want to be!</a>);

    return (
      <div className="profile-main">
        <ProfileBar props={this.props.currentUser} />

        <div className="profile-right">
          <div className="profile-title">
            <h1>Edit Account Details</h1>
          </div>
          <form onSubmit={this.handleSubmit} className="full-profile">
            {this.renderErrors()}
            <div className="profile-details">
              <div className="left">
                <label>
                  <p className="signinup-title">Name:*</p>
                  <input type="text"
                      value={this.state.name}
                      onChange={this.update('name')}
                      className="signinup-input"
                  />
                </label>
                <label>
                  <p className="signinup-title">Email:*</p>
                  <input type="text"
                      value={this.state.email}
                      onChange={this.update('email')}
                      className="signinup-input"
                  />
                </label>

                <br/>
                <label>
                  <p className="signinup-title">Phone:</p>
                  <input type="tel"
                      value={this.state.phone}
                      onChange={this.update('phone')}
                      className="signinup-input"
                      // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      // required
                  />
                </label>

                <br/>
                <label>
                  <p className="signinup-title">Current Metro/Region:*</p>
                  <input type="text"
                      value={this.state.home_city}
                      onChange={this.update('home_city')}
                      className="signinup-input"
                  />
                </label>

                <br/>
                <label>
                  <p className="signinup-title">Story</p>
                  <textarea rows="4" cols="50" 
                      value={this.state.story}
                      onChange={this.update('story')}
                      // If host, required
                  />   
                </label>
              </div>
              <div className="right">
                <p>A picture of yourself.<br/>Optional, until you become a host.</p>
                <input type="file" onChange={this.updateFile()} />
                <img className="preview" src={this.state.imageURL} />
              </div>
            </div>
            <div className="change-password">
                {/* <label>
                <p className="signinup-title">Please type in old password to confirm</p>
                <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="signinup-input"
                />
                </label>
                <label>
                <p className="signinup-title">Please type in new password</p>
                <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="signinup-input"
                />
                </label>
                <label>
                <p className="signinup-title">Please type in new password again</p>
                <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="signinup-input"
                />
                </label> */}
            </div>
            <input className="session-submit" type="submit" value="Submit Changes" />
          </form>
          <div className="sub-host">
            <label>
              <h3 className="signinup-title">Am I a host?</h3>
              <p>If you want to host your own meetup</p>
              {amIHost(this.state.host_status)}
            </label>
            <label>
              <h3 className="signinup-title">Email Subscription:</h3>
              <p>Your email subscription is used to contact you when needed, in cases such as...</p>
              <button onClick={this.toggleEmailSub} >{yepNope(this.props.currentUser.email_subscription)}</button>
            </label>
            <label>
              <h3 className="signinup-title">Delete Account</h3>
              <p>You don't want to have an account anymore?</p>
              <button onClick={this.handleCloseAcct} >Thank you for trying Kapiteh Times!</button>
            </label>

            {/* <button onClick={this.kingYourself} >{yepNope(this.props.currentUser.host_status)}</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
