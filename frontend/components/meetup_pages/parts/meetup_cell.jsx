import React from 'react';
import { Link } from 'react-router-dom';
import * as convertFunctions from '../../../util/convertor_util';
import {fetchMeetup, joinMeetup, leaveMeetup } from '../../../actions/meetup_actions';
// import DUMMY_CITIES from '../dummy_cities';

class SingleMeetup extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleAttend = this.handleAttend.bind(this);
    this.handleUnattend = this.handleUnattend.bind(this);
    this.handleCancelMeetup = this.handleCancelMeetup.bind(this);
  }
  
  handleClick(){
    return(e) => {
      e.preventDefault();
      this.props.history.push(`/users/${this.props.meetup.host_id}`);
    };
  };

  handleEdit(meetupId){
    return(e) => {
      e.preventDefault();
      const meetupId = this.props.meetup.id;
      // this.props.requestSingleMeetup(this.props.meetup.id)
      // .then(() => this.props.history.push(`/hosting/${this.props.meetup.id}`));
      this.props.history.push(`/meetups/${this.props.meetup.id}/edit`);
    };
  };

  handleAttend(meetupId){
    return(e) => {
      e.preventDefault();
      this.props.joinMeetup(meetupId)
      .then(() => this.props.history.push('/profile'));
    };
  };

  handleUnattend(meetupId){
    return(e) => {
      e.preventDefault();
      this.props.leaveMeetup(meetupId)
      .then(() => this.props.history.push('/meetups'));
    };
  };

  handleCancelMeetup(meetupId){
    return(e) => {
      e.preventDefault();
      this.props.cancelMeetup(meetupId)
    };
  };

  // We will leave these in the meetup show
  meetupRightItem(user){
    if(user && user.host_status){  // Logged in and is a host
      {guests.map(guest => <div><p className="meetup-details-right">guest.name</p><p>guest.phone</p></div>)}
    }
    else{
      return(
        <div className="meetup-details-right">
          {/* host details */}
          {/* host phone */}
        </div>
      )
    }
  }


  render(){
    const currentUser = this.props.currentUser;
    const meetup = this.props.meetup;
    const guests = meetup.guest_ids;
    const host = meetup.hostName;
    const venue = meetup.location[2];
    const address = `${meetup.location[3]} ${meetup.location[4]} ${meetup.location[5]},${meetup.location[6]}`;
    const topic = meetup.topic;
    const starttime = new Date(meetup.starttime*1000);
      // const dayOfWeek = convertFunctions.convertIntoDOW(starttime.getDay());
      // const month = convertFunctions.convertIntoMonth(starttime.getMonth());
      const hour = convertFunctions.convertIntoAMPM(starttime.getHours());
      const date = `${convertFunctions.convertIntoDOW(starttime.getDay())}, ${convertFunctions.convertIntoMonth(starttime.getMonth())} ${starttime.getDate()}, ${starttime.getFullYear()}`;
      const time = `${hour[0]}:${convertFunctions.formatMinute(starttime.getMinutes())} ${hour[1]}`;

/////////////////////////////////////////////////////////////////
    let meetupJoinLink = <Link className="meetup-button green" to={`/meetups/${meetup.id}`}>CHECKOUT THIS MEETUP</Link>;
    let meetupNote = null;
    let meetupCancelButton = null;
    let meetupEditButton = null;
  
    // You are the host
    if (this.props.meetup.host_id === currentUser) {
      meetupNote =
      <p className="meetup-button blue">
          YOU'RE HOSTING THIS MEETUP
      </p>;

      meetupEditButton =
      <button className="meetup-edit-button meetup-button orange" onClick={this.handleEdit(meetup.id)}>
          EDIT MEETUP
      </button>;

      meetupCancelButton =
      <button className="meetup-button red" onClick={this.handleCancelMeetup(meetup.id)}>
        CANCEL THIS MEETUP
      </button>;
      // meetupEditButton =
      // <Link to={`/hosting/${meetup.id}`}>Edit This Meetup</Link>;
    } 
    // You've joined
    else if (guests.includes(currentUser)) {
      meetupNote =
      <p className="meetup-button green">
        YOU JOINED THIS MEETUP
      </p>;

      meetupCancelButton =
      <button className="meetup-button red" onClick={this.handleUnattend(meetup.id)}>
        CANCEL YOUR SPOT
      </button>;
    } 
    // Meetup full, you haven't joined
    else if (this.props.meetup.guests.length >= this.props.meetup.capacity) {
      meetupNote =
      <p className="meetup-button green">
        MEETUP IS FULL
      </p>;
      // // FUTURE UPGRADE TO WAITLIST
      // <button className="meetup-button green">
      //   YOU JOINED THIS MEETUP
      // </button>;
    } 
/////////////////////////////////

    return (
      // host, topic
      <div className="meetup-index-item">
        <ul className="meetup-details">
          <li>Venue:  {venue}</li>
          <li>Address:{address}</li>
          <li>Date:   {date}</li>
          <li>Time:   {time}</li>
          {/* <li>End:    </li> */}
          <li>Space:  {guests.length}/{meetup.capacity}</li>
        </ul>

        {/* {meetupRightItem(currentUser)} */}

        {/* <div className="meetup-details-bottom">
          <h3>Icebreaker. Possible topics</h3>
          <p>{meetup.topic}</p>
        </div> */}




        <div className="meetup-actions">
          {meetupJoinLink}
          {meetupNote}
          {meetupCancelButton}
          {meetupEditButton}
        </div>
      </div>
    );
  }
};

export default SingleMeetup;
