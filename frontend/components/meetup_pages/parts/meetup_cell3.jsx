import React from 'react';
import { Link } from 'react-router-dom';
import * as convertFunctions from '../../../util/convertor_util';
// import {fetchMeetup, joinMeetup, leaveMeetup } from '../../../actions/meetup_actions';
// import DUMMY_CITIES from '../dummy_cities';

const SingleMeetup = (props) => {
  // console.log("meetup cell");
  // console.log(props);
  const currentUser = props.currentUser;
  const meetup = props.meetup;
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
  
  const handleClick = () => {
    return(e) => {
      e.preventDefault();
      props.history.push(`/users/${props.meetup.host_id}`);
    };
  };

  const handleEdit = (meetupId) => {
    return(e) => {
      e.preventDefault();
      // props.requestSingleMeetup(props.meetup.id)
      // .then(() => props.history.push(`/hosting/${props.meetup.id}`));
      props.history.push(`/hosting/${props.meetup.id}`);
    };
  };

  const handleAttend = (meetupId) => {
    return(e) => {
      e.preventDefault();
      props.joinMeetup(meetupId)
      .then(() => props.history.push('/profile'));
    };
  };

  const handleUnattend = (meetupId) => {
    return(e) => {
      e.preventDefault();
      props.leaveMeetup(meetupId)
      .then(() => props.history.push('/profile'));
    };
  };

  const handleCancelMeetup = (meetupId) => {
    return(e) => {
      e.preventDefault();
      props.cancelMeetup(meetupId)
      .then(() => props.history.push('/profile'));
    };
  };


  let meetupJoinLink = <Link className="meetup-button green" to={`/meetups/${meetup.id}`}>CHECKOUT THIS MEETUP</Link>;
  let meetupNote = null;
  let meetupCancelButton = null;
  let meetupEditButton = null;

  // Logged In
  // if (currentUser) {  
    // You are the host
    if (props.meetup.host_id === currentUser) {
      meetupNote =
      <p className="meetup-button blue">
          YOU'RE HOSTING THIS MEETUP
      </p>;

      meetupEditButton =
      <button className="meetup-edit-button meetup-button orange" onClick={handleEdit(props.meetup.id)}>
          EDIT MEETUP
      </button>;

      meetupCancelButton =
      <button className="meetup-button red" onClick={handleCancelMeetup(props.meetup.id)}>
        CANCEL THIS MEETUP
      </button>;
      // meetupEditButton =
      // <Link to={`/hosting/${props.meetup.id}`}>Edit This Meetup</Link>;
    } 
    // You've joined
    else if (guests.includes(currentUser)) {
      meetupNote =
      <p className="meetup-button green">
        YOU JOINED THIS MEETUP
      </p>;

      meetupCancelButton =
      <button className="meetup-button red" onClick={handleUnattend(props.meetup.id)}>
        CANCEL YOUR SPOT
      </button>;
    } 
    // Meetup full, you haven't joined
    else if (props.meetup.guests.length >= props.meetup.capacity) {
      meetupNote =
      <p className="meetup-button green">
        MEETUP IS FULL
      </p>;
      // // FUTURE UPGRADE TO WAITLIST
      // <button className="meetup-button green">
      //   YOU JOINED THIS MEETUP
      // </button>;
    } 

    // // You haven't joined, there's space
    // else {
    //   meetupJoinLink =
    //   <Link className="meetup-button green" to={`/meetups/${meetup.id}`}>
    //     CHECKOUT THIS MEETUP
    //   </Link>;
    //   // <a className="meetup-button orange" onClick={handleAttend(props.meetup.id)}>
    //   //   CHECKOUT THIS MEETUP
    //   // </a>;
    // }
  // } 
  // Not logged in
  // else {
  //     // There is space
  //     if(guests.length < meetup.capacity){
  //       meetupJoinLink =
  //       <Link className="meetup-button sign-in-to-schedule" to="/signin">
  //       Sign in to join
  //       </Link>;

  //       meetupCancelButton =
  //       <Link className="meetup-button sign-in-to-schedule" to="/signup">
  //       Sign up to join
  //       </Link>;
  //     }
  //     // Meetup is full
  //     else{
  //       meetupJoinLink =
  //       <p className="meetup-button orange">Meetup is full</p>
  //     }
      
  // }

  // We will leave these in the meetup show
  const meetupRightItem = (user) =>{
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
};

export default SingleMeetup;
