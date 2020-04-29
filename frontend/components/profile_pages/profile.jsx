// This pages shows all accepted upcoming meetups and your profile details
import React from 'react';
import ProfileBar from './parts/profile_pres';
import { JoinedMeetups, HostedMeetups } from './parts/meetup_pres';
import * as convertFunctions from '../../util/convertor_util';
import MeetupCell from './parts/meetup_pres';
import MeetupCellContainer from './parts/meetup_pres_container';

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

  componentDidMount() {   
    const user = this.props.currentUser.id;
    // const listOfMeetups = this.props.getMeetups(user);
    this.props.getMeetups(user);
    // console.log(listOfMeetups)
  }

  hostOnlyMeetups(hosting){
    if (this.props.currentUser.host_status){
      if(hosting.length > 0){
        return(
          <div id="upcoming-hosting-meetups" className="profile-meetup-box">
            <h3>Meetups you are going to Host</h3>
              {hosting.map (meetup => 
                // <div className="meetup-index-item">
                //   <ul className="meetup-details">
                //     <li>Venue:   {meetup.location[2]}</li>
                //     <li>Address: {meetup.location[3]} {meetup.location[4]}, {meetup.location[6]} {meetup.location[5]}</li>
                //     <li>Date:    {convertFunctions.convertIntoDOW(meetup.starttime[0])}, {meetup.starttime[2]}/{meetup.starttime[3]}/{meetup.starttime[1]}</li>
                //     <li>Time:    {meetup.starttime[4]}:{meetup.starttime[5]}</li>
                //     {/* <li>End:    </li> */}
                //     <li>Space:  {meetup.guests.length}/{meetup.capacity}</li>
                //     <li>Topics and Icebreakers: <br/> {meetup.topic}</li>
                //   </ul>
                // </div>
                <MeetupCellContainer key={meetup.id} meetup={meetup} host={meetup.host_id} type="host"/>
              )}
          </div>
        )
      } else {
        return(
          <div id="upcoming-hosting-meetups" className="profile-meetup-box">
            <h3>Meetups you are going to Host</h3>
            <p>Wait... You don't have any upcoming MeetUps to host... yet!</p>
            <a href="#/meetups/new">Create New Meetup</a>
          </div>
      )
    }
  }}

  joinedMeetups(joined){
    if(joined.length > 0){
      return(
        <div id="upcoming-hosting-meetups" className="profile-meetup-box">
          <h3>Meetups you are attending</h3>
            {joined.map (meetup => 
              // <div className="meetup-index-item">
              //   <ul className="meetup-details">
              //     <li>Venue:   {meetup.location[2]}</li>
              //     <li>Address: {meetup.location[3]} {meetup.location[4]}, {meetup.location[6]} {meetup.location[5]}</li>
              //     <li>Date:    {convertFunctions.convertIntoDOW(meetup.starttime[0])}, {meetup.starttime[2]}/{meetup.starttime[3]}/{meetup.starttime[1]}</li>
              //     <li>Time:    {meetup.starttime[4]}:{meetup.starttime[5]}</li>
              //     {/* <li>End:    </li> */}
              //     <li>Space:  {meetup.guests.length}/{meetup.capacity}</li>
              //     <li>Topics and Icebreakers: <br/> {meetup.topic}</li>
              //   </ul>
              // </div>
              <MeetupCellContainer key={meetup.id} meetup={meetup} host={meetup.host_id} type="join"/>
            )}
        </div>
      )
    } else {
      return(
        <div id="upcoming-hosting-meetups" className="profile-meetup-box">
          <h3>Meetups you are going to Host</h3>
          <p>Wait... You don't have any MeetUps coming up... yet!</p>
          <a href="#/meetups">Join a Meetup!</a>
        </div>
    )
  }}

  render() {
    const hostOnlyLink = bool => {
      if (bool){return(
        <a href="#/meetups/new">Let's create and host a new Meetup</a>
      )}
    }
    const meetups = Array.from(this.props.meetups);
    let joined = [];
    let hosting = [];
    meetups.forEach(meetup => {
      if(meetup.host_id === this.props.currentUser.id){
        hosting.push(meetup);
      } else{
        joined.push(meetup);
      }
    })
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
            <a href="#/meetups">Sign Up for future MeetUps!</a>
            {hostOnlyLink(this.props.currentUser.host_status)}
          </div>

          {this.joinedMeetups(joined)}
          {this.hostOnlyMeetups(hosting)}

        </div>
      </div>
    );
  }
}

export default Profile;
