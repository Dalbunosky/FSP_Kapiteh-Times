import React from 'react';
import { Link } from 'react-router-dom';
import { DAYS, MONTHS, formatAMPM } from '../../util/meetups_util';
// import DUMMY_CITIES from '../dummy_cities';

const MeetupIndexItem = (props) => {

  const handleClick = () => {
    return(e) => {
      e.preventDefault();
      props.history.push(`/users/${props.meetup.host_id}`);
    };
  };

  const handleEdit = (meetupId) => {
    return(e) => {
      e.preventDefault();
      props.requestSingleMeetup(props.meetup.id)
      .then(() => props.history.push(`/hosting/${props.meetup.id}`));
    };
  };

  const handleAttend = (meetupId) => {
    return(e) => {
      e.preventDefault();
      props.attendMeetup(meetupId)
      .then(() => props.history.push('/profile'));
    };
  };

  const handleUnattend = (meetupId) => {
    return(e) => {
      e.preventDefault();
      props.unattendMeetup(meetupId)
      .then(() => props.history.push('/profile'));
    };
  };

  const meetupDate = Date()

//   const meetupDate = new Date(props.meetup.date);
  const weekDayNumber = meetupDate.getDay();
  const weekDayName = DAYS[weekDayNumber];
  const monthNumber = meetupDate.getMonth();
  const monthName = MONTHS[monthNumber];

  let meetupJoinButton;
  let meetupCancelButton;
  let meetupEditButton = null;

  // Logged In
  if (props.currentUser) {  
    // You are the host
    if (props.meetup.host_id === props.currentUser.id) {
        meetupJoinButton =
        <button className="meetup-button blue">
            YOU'RE HOSTING THIS MEETUP
        </button>;

        meetupEditButton =
        <button className="meetup-edit-button meetup-button orange" onClick={handleEdit(props.meetup.id)}>
            EDIT MEETUP
        </button>;
        // meetupEditButton =
        // <Link to={`/hosting/${props.meetup.id}`}>Edit This Meetup</Link>;
    } 
    // You've joined
    else if (props.meetup.guest_ids.includes(props.currentUser.id)) {
      meetupJoinButton =
      <button className="meetup-button green">
        YOU JOINED THIS MEETUP
      </button>;

      meetupCancelButton =
      <button className="meetup-button red" onClick={handleUnattend(props.meetup.id)}>
        CANCEL YOUR SPOT
      </button>;
    } 
    // // Meetup full, you haven't joined
    // else if (props.meetup.guest_ids.includes(props.currentUser.id)) {
    //   meetupJoinButton =
    //   <button className="meetup-button green">
    //     YOU JOINED THIS MEETUP
    //   </button>;

    //   meetupCancelButton =
    //   <button className="meetup-button red" onClick={handleUnattend(props.meetup.id)}>
    //     CANCEL YOUR SPOT
    //   </button>;
    // } 

    // You haven't joined, there's space
    else {

      meetupJoinButton =
      <button className="meetup-button orange" onClick={handleAttend(props.meetup.id)}>
        ATTEND THIS MEETUP
      </button>;


    }
  } 
  // Not logged in
  else {
      // There is space
      if(guests.length < capacity){
        meetupJoinButton =
        <Link className="sign-in-to-schedule" to="/login">
        Sign in to schedule
        </Link>;
      }
      // Meetup is full
      else{
        meetupJoinButton =
        <p>Meetup is full</p>
      }
      
  }

  return (
    <div className="meetup-index-item">
        <ul className="meetup-time-info">
            <li className="meetup-day-name">{weekDayName}</li>
            <li className="meetup-date">{monthName} {meetupDate.getDate()} {meetupDate.getFullYear()}</li>
            <li className="meetup-time">{formatAMPM(meetupDate)}</li>
        </ul>

        <div className="meetup-extra-info">
            <span><strong>Address</strong> {props.meetup.address}</span>
            <span><strong>City</strong> {DUMMY_CITIES.find((city) => props.meetup.city_id === city.id).name}</span>
            <span className="meetup-host-name">
            <strong>Host</strong> <Link to={`/users/${props.meetup.host_id}`}>{props.meetup.host_name}</Link>
            </span>
            <img onClick={handleClick()} src={props.meetup.host_thumb} />
        </div>

        {meetupJoinButton}
        {meetupCancelButton}
        {meetupEditButton}
    </div>
  );
};

export default MeetupIndexItem;
