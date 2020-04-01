// This pages shows all accepted upcoming meetups and your profile details
import React from 'react';
import ProfileBar from './parts/profile_pres';
import { JoinedMeetups, HostedMeetups } from './parts/meetup_pres';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   email: '',
    //   password: '',
    //   host_status: false
    // };
    // this.handleSubmit = this.handleSubmit.bind(this);


    this.hostOnlyMeetups = this.hostOnlyMeetups.bind(this);
  }

  hostOnlyMeetups(){
    if (this.props.currentUser.host_status){return(
      <div id="upcoming-hosting-meetups" className="profile-meetup-box">
        <h3>Meetups you are going to Host</h3>
        If upcoming meetups:
          HostededMeetups Box
        else 
          "You don't have any MeetUps to host... yet!"
      </div>
    )}
  }

  render() {
    // console.log(this.props);
    const hostOnlyLink = bool => {
      if (bool){return(
        <a href="#/meetups/new">Let's create and host a new Meetup</a>
      )}
    }

    return (
      <div className="profile-main">

        <div className="profile-sidebar">
            <ProfileBar props={this.props.currentUser} />
            <a href="#/profile/edit">Edit Profile</a>
        </div>

        <div className="profile-right">
          <div className="profile-title">
            <h1>Upcoming meetups</h1>
            <a href="#/profile/history">Your past meetups</a>
            {hostOnlyLink(this.props.currentUser.host_status)}
          </div>

          <div id="upcoming-joining-meetups" className="profile-meetup-box">
            <h3>Meetups you Signed Up for</h3>
            If upcoming meetups:
              JoinedMeetups Box
            else 
              "You don't have any MeetUps coming up... yet!"
          </div>

          {this.hostOnlyMeetups()}

          <button>Sign Up for future MeetUps!</button>
        </div>
      </div>
    );
  }
}

export default Profile;
