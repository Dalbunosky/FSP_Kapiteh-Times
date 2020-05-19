import React from 'react';
import { Link } from 'react-router-dom';

import * as convertFunctions from '../../util/convertor_util';

// location: [], // [lat, lng, name of venue, address, city, state/province, zip, country]


class MeetupShow extends React.Component { 
    constructor(props){
        super(props)

    }
////////////////////////////////////////////////////////////////////////
    componentDidMount() {
      this.props.fetchMeetup(this.props.meetupId)
      .then(meetup => {this.props.fetchHost(this.props.meetup.host_id)})
    }
    componentWillUnmount(){
      // this.props.clearErrors();
    }
  
////////////////////////////////////////////////////////////////////////
    handleClick(){
      return(e) => {
        e.preventDefault();
        this.props.history.push(`/users/${props.meetup.host_id}`);
      };
    };
  
    handleAttend(e){
      return(e) => {
        e.preventDefault();
        this.props.joinMeetup(this.props.meetupId)
        // .then(() => this.props.history.push('/profile'));
      };
    };
  
    handleUnattend(e){
      return(e) => {
        e.preventDefault();
        this.props.leaveMeetup(this.props.meetupId)
        // .then(() => this.props.history.push('/profile'));
      };
    };
  
    handleEdit(e){
      return(e) => {
        e.preventDefault();
        this.props.history.push(`/meetups/${this.props.meetup.id}/edit`);
        // this.props.editMeetup(this.props.meetupId)
        // .then(() => this.props.history.push(`/meetups/edit/${this.props.meetupId}`));
      };
    };
  
    handleCancelMeetup(e){
      return(e) => {
        e.preventDefault();
        this.props.cancelMeetup(this.props.meetupId)
        .then(() => this.props.history.push('/meetups'));
      };
    };

  ////////////////////////////////////////////////////////////////////////
    fetchHostOrGuests(){
        // Probably not needed
        // If logged_in
        // If you are the host, fetch guest information
        if(this.props.session.id && this.props.meetup.host_id === this.props.session.id){
            // Might need to do a fetchGuest multiple times in loop
            // On 3rd thought, might just append all information to meetup
            // On 4th thought, information might already be appended
            // this.props.fetchGuests()
        } 
        // Otherwise, fetch host information
        else{
            this.props.fetchHost()
        }
    }

    meetupActions(){
        let meetupJoinLink = null;
        let meetupEditButton = null;
        let meetupCancelButton = null;
        const meetup = this.props.meetup;
        const currentUser = this.props.users[this.props.session.id];
        // const host = this.props.users[meetup.host_id];
      
        // Logged In
        if (currentUser) {  
          // You are the host
          if (meetup.host_id === currentUser.id) {
            meetupJoinLink =
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
            // <Link to={`/hosting/${props.meetup.id}`}>Edit This Meetup</Link>;
          } 
          // You've joined
          else if (meetup.guest_ids.includes(currentUser.id)) {
          // else if (meetup.guests.includes(currentUser)) {
            meetupJoinLink =
            <p className="meetup-button green">
              YOU JOINED THIS MEETUP
            </p>;
      
            meetupCancelButton =
            <button className="meetup-button red" onClick={this.handleUnattend(meetup.id)}>
              CANCEL YOUR SPOT
            </button>;
          } 
          // Meetup full, you haven't joined
          else if (meetup.guests.length >= meetup.capacity) {
            meetupJoinLink =
            <p className="meetup-button green">
              MEETUP IS FULL
            </p>;
            // // FUTURE UPGRADE TO WAITLIST
            // <button className="meetup-button green">
            //   YOU JOINED THIS MEETUP
            // </button>;
          } 
      
          // You haven't joined, there's space
          else {
            meetupJoinLink =
            <button className="meetup-button red" onClick={this.handleAttend(meetup.id)}>
              JOIN THIS MEETUP!
            </button>;
            // <a className="meetup-button orange" onClick={handleAttend(props.meetup.id)}>
            //   CHECKOUT THIS MEETUP
            // </a>;
          }
        } 
        // Not logged in
        else {
            // There is space
            if(meetup.guests.length < meetup.capacity){
              meetupJoinLink =
              <Link className="meetup-button sign-in-to-schedule" to="/signin">
              Sign in to join
              </Link>;
      
              meetupCancelButton =
              <Link className="meetup-button sign-in-to-schedule" to="/signup">
              Sign up to join
              </Link>;
            }
            // Meetup is full
            else{
              meetupJoinLink =
              <p className="meetup-button orange">Meetup is full</p>
            }
            
        }
        return(
            <div className="meetup-actions">
                {meetupJoinLink}
                {meetupCancelButton}
                {meetupEditButton}
            </div>
        )
    }

    displayMeetup(){
        if(this.props.meetup && this.props.users[this.props.meetup.host_id]){
          // this.props.fetchHost(this.props.meetup.host_id);
            const meetup = this.props.meetup;
            const starttime = new Date(meetup.starttime*1000);
                const hour = convertFunctions.convertIntoAMPM(starttime.getHours());
                const date = `${convertFunctions.convertIntoDOW(starttime.getDay())}, ${convertFunctions.convertIntoMonth(starttime.getMonth())} ${starttime.getDate()}, ${starttime.getFullYear()}`;
                const time = `${hour[0]}:${convertFunctions.formatMinute(starttime.getMinutes())} ${hour[1]}`;
            return(
                <div>
                    <div className="meetup-left">
                        <ul className="meetup-details">
                            <li>Venue:  {meetup.location[2]}</li>
                            <li>Address:{meetup.location[3]} {meetup.location[4]} {meetup.location[5]},{meetup.location[6]}</li>
                            <li>Date:                        {date}</li>
                            <li>Time:   {time}</li>
                            {/* <li>End:    </li> */}
                            <li>Space:  {meetup.guests.length}/{meetup.capacity}</li>
                            <li>Topics and Icebreakers: <br/>{meetup.topic}</li>
                        </ul>
                    </div>
                    {this.infoHostOrGuests()}
                    {this.meetupActions()}
                </div>
            )
        }
        else{
          return(
            <div>
                <div className="meetup-left">
                    <p>We regret to inform you that... THIS MEETUP DOES NOT EXIST!</p>
                    <a href="#/meetups">Go back to meetups</a>
                </div>
            </div>
          )
        }
    }

    infoHostOrGuests(){
        const meetup = this.props.meetup;
        const currentUser = this.props.users[this.props.session.id];
        const host = this.props.users[meetup.host_id];
        // If you are logged in and the host, show the guests
        if(currentUser && currentUser.id === meetup.host_id){
            return(
                <div className="meetup-left">
                    <ul className="meetup-guests">
                        <h3>Guests:</h3>
                        {meetup.guests.map((guest, i) => {
                            if (guest.phone)
                                (<li key={`guest-${i}`}>Guest: {guest.name} <br/> Phone: {guest.phone}</li>)
                            else 
                                (<li key={`guest-${i}`}>Guest: {guest.name}</li>)
                        })}
                    </ul>

                </div>      
            )
        }
        // Else, show the host
        else{
            return(
                <div className="meetup-left">
                    <ul className="meetup-guests">
                        <div>HOST FACE</div>
                        <h3>The Host: {host.name}</h3>
                        <p>Home region: {host.home_city}</p>
                        <p>Contact:</p>
                        <ul>
                          <p>Phone number: {host.phone}</p>
                          <p>Email: {host.email}</p>
                        </ul>
                        <p>{host.name}'s Life Story: <br/>{host.story}</p>
                    </ul>

                </div>      
            )
        }
    }

////////////////////////////////////////////////////////////////////////
    render() {
        // console.log(this.props.meetup);

        return (
            <div>
                <a className="nav-link-item" href="#/meetups">Return to MeetUps Menu</a>
                {this.displayMeetup()}
            </div>
        )
    }  
}

export default MeetupShow;