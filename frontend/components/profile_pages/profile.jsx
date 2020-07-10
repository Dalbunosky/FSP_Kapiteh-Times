// This pages shows all accepted upcoming meetups and your profile details
import React from 'react';
import ProfileBar from './parts/profile_pres';
import * as convertFunctions from '../../util/convertor_util';
// import MeetupCell from './parts/meetup_pres';
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
    this.props.fetchMeetups(this.props.currentUser.id);
  }

  componentDidUpdate(prevProps){
    if(this.props.meetups.length != prevProps.meetups.length){
      this.props.fetchMeetups(this.props.currentUser.id);
    }
  }

  hostOnlyMeetups(hosting){
    if (this.props.currentUser.host_status){
      if(hosting.length > 0){
        // Quicksort by starttime, which at this point is an integer
        hosting = convertFunctions.quickSortMeetups(hosting);

        return(
          <div id="upcoming-hosting-meetups" className="profile-meetup-box">
            <h3>Meetups you are going to Host</h3>
              {hosting.map (meetup => 
                // <MeetupCell key={meetup.id} meetup={meetup} host={meetup.host_id} timing="future" type="host"/>
                <MeetupCellContainer key={meetup.id} meetup={meetup} host={meetup.host_id} timing="future" type="host"/>
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
      // Quicksort by starttime, which at this point is an integer
      joined = convertFunctions.quickSortMeetups(joined);

      return(
        <div id="upcoming-hosting-meetups" className="profile-meetup-box">
          <h3>Meetups you are attending</h3>
            {joined.map (meetup => 
              // <MeetupCell key={meetup.id} meetup={meetup} host={meetup.host_id} timing="future" type="join"/>
              <MeetupCellContainer key={meetup.id} meetup={meetup} host={meetup.host_id} timing="future" type="join"/>
            )}
        </div>
      )
    } else {
      return(
        <div id="upcoming-hosting-meetups" className="profile-meetup-box">
          <h3>Meetups you are attending</h3>
          <p>Wait... You don't have any MeetUps coming up... yet!</p>
          <a href="#/meetups">Join a Meetup!</a>
        </div>
      )
    }
  }

  render() {
    const hostOnlyLink = bool => {
      if (bool){return(
        <a href="#/meetups/new" className="margin-10 ilb">Let's create and host a new Meetup</a>
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
    const selfPic = (this.props.currentUser.img_url && this.props.currentUser.img_url != "" ?  this.props.currentUser.img_url : window.staticImages.defaultPic)
    return (
      <div className="profile-history">

        {/* <div className="profile-sidebar"> */}
            <ProfileBar props={this.props.currentUser} type=""/>
            {/* <a href="#/profile/edit">Edit Profile</a> */}
        {/* </div> */}
        <div className="profile-right">
          <div className="profile-title">
            <div className="profile-bar">
              <h1>Upcoming meetups</h1>
              <div className="host-pic-thumb right-end"><img src={selfPic} alt="Profile Picture"/></div>
            </div>
            <a href="#/profile/history" className="margin-10 ilb">Your past meetups</a>
            <a href="#/meetups" className="margin-10 ilb">Sign Up for future MeetUps!</a>
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
