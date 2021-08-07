import React from 'react';
import ProfileBar from './parts/profile_pres';
import * as convertFunctions from '../../util/convertor_util';
import MeetupCellContainer from './parts/meetup_pres_container';

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

  componentDidMount() { 
    this.props.fetchMeetups(this.props.currentUser.id);
  }

  componentWillUnmount(){
    // this.props.clearErrors();
    if(!!this.props.session){
      this.props.clearMessage();
    }
  }

  hostOnly(){
    return(this.props.currentUser.host_status ? <p> past hosted meetups</p> : "")
  
    // return(this.props.currentUser.host_status ? <HostedMeetups props={hostedMeetups} /> : "")
  }

  joinedMeetups(joined){
    // if(joined.length > 0){
      // Quicksort by starttime, which at this point is an integer
      joined = convertFunctions.quickSortMeetups(joined);

      return(
        <div id="upcoming-hosting-meetups" className="profile-meetup-box">
          <h3>Past meetups you joined</h3>
            {joined.map (meetup => 
              // <MeetupCell key={meetup.id} meetup={meetup} host={meetup.host_id} timing="history" type="join"/>
              <MeetupCellContainer key={meetup.id} meetup={meetup} host={meetup.host_id} timing="history" type="join"/>
            )}
        </div>
      )
    // } else {
    //   return(
    //     <div id="upcoming-hosting-meetups" className="profile-meetup-box">
    //       <h3>Meetups you are attending</h3>
    //       <p>Wait... You don't have any MeetUps coming up... yet!</p>
    //       <a href="#/meetups">Join a Meetup!</a>
    //     </div>
    //   )
    // }
  }

  hostOnlyMeetups(hosting){
    // if (this.props.currentUser.host_status){
      if(hosting.length > 0 || this.props.currentUser.host_status){
        // Quicksort by starttime, which at this point is an integer
        hosting = convertFunctions.quickSortMeetups(hosting);

        return(
          <div id="upcoming-hosting-meetups" className="profile-meetup-box">
            <h3>Meetups you are going to Host</h3>
              {hosting.map (meetup => 
                // <MeetupCell key={meetup.id} meetup={meetup} host={meetup.host_id} timing="history" type="host"/>
                <MeetupCellContainer key={meetup.id} meetup={meetup} host={meetup.host_id} timing="history" type="host"/>
              )}
          </div>
        )
      // } else {
      //   return(
      //     <div id="upcoming-hosting-meetups" className="profile-meetup-box">
      //       <h3>Meetups you are going to Host</h3>
      //       <p>Wait... You don't have any upcoming MeetUps to host... yet!</p>
      //       <a href="#/meetups/new">Create New Meetup</a>
      //     </div>
      // )
    // }
  }}

  render() {
    // console.log(this.props);
    const selfPic = (this.props.currentUser.image_url && this.props.currentUser.image_url != "" ?  this.props.currentUser.image_url : window.staticImages.defaultPic)
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
      <div className="profile-history">
        {/* <div className="profile-sidebar"> */}
          <ProfileBar props={this.props.currentUser}  type=""/>
          {/* <a href="#/profile/edit">Edit Profile</a> */}
        {/* </div> */}

        <div className="profile-right">
          <div className="profile-title">
            <div className="profile-bar">
              <h1>Past meetups</h1>
              <div className="host-pic-thumb right-end"><img src={selfPic} alt="Profile Picture"/></div>
            </div>
            <a href="#/profile" className="margin-10 ilb">Your upcoming meetups</a>
          </div>

          {this.joinedMeetups(joined)}
          {this.hostOnlyMeetups(hosting)}

          {/* <h3>Past meetups you joined</h3> */}
          {/* <p>past joined meetups</p> */}
          {/* <JoinedMeetups props={joinedMeetups} /> */}
          {/* <h3>Past meetups you hosted</h3> */}
          {/* {this.hostOnly()} */}
        </div>

      </div>
    );
  }
}

export default History;
