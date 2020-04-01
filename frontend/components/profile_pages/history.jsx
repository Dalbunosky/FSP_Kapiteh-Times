// This pages shows all accepted upcoming meetups and your profile details
import React from 'react';

import ProfileBar from './parts/profile_pres';
import { JoinedMeetups, HostedMeetups } from './parts/meetup_pres';

class History extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   email: '',
    //   password: '',
    //   host_status: false
    // };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.hostOnly = this.hostOnly.bind(this);
  }

  hostOnly(){
    return(this.props.currentUser.host_status ? <p> past hosted meetups</p> : "")
  
    // return(this.props.currentUser.host_status ? <HostedMeetups props={hostedMeetups} /> : "")
  }


  render() {
    // console.log(this.props.currentUser);
    return (
      <div className="profile-main">
        <div className="profile-sidebar">
          <ProfileBar props={this.props.currentUser} />
          <a href="#/profile/edit">Edit Profile</a>
        </div>
        <div className="profile-right">
          <div className="profile-title">
            <h1>Past meetups</h1>
            <a href="#/profile">Your upcoming meetups</a>
          </div>
          <h3>Past meetups you joined</h3>
          <p>past joined meetups</p>
          {/* <JoinedMeetups props={joinedMeetups} /> */}
          <h3>Past meetups you hosted</h3>
          {this.hostOnly()}
        </div>
      </div>
    );
  }
}

export default History;
