import React from 'react';
import * as convertFunctions from '../../util/convertor_util';

// location: [], // [lat, lng, name of venue, address, city, state/province, zip, country]


class MeetupShow extends React.Component { 
    constructor(props){
        super(props)

    }

    componentDidMount() {
        // You have the meetup.
        this.props.fetchMeetup(this.props.meetupId);
        if(this.props.meetup){
        //     this.props.fetchUser(this.props.currentUser);
            this.props.fetchHost(this.props.meetupId);
        }
    }
  
    handleClick(){
      return(e) => {
        e.preventDefault();
        this.props.history.push(`/users/${props.meetup.host_id}`);
      };
    };
  
    handleAttend(meetupId){
      return(e) => {
        e.preventDefault();
        this.props.joinMeetup(meetupId)
        .then(() => props.history.push('/profile'));
      };
    };
  
    handleUnattend(meetupId){
      return(e) => {
        e.preventDefault();
        this.props.unattendMeetup(meetupId)
        .then(() => props.history.push('/profile'));
      };
    };
  
    handleEdit(meetupId){
      return(e) => {
        e.preventDefault();
        this.props.requestSingleMeetup(props.meetup.id)
        .then(() => props.history.push(`/hosting/${props.meetup.id}`));
      };
    };
  
    handleCancelMeetup(meetupId){
      return(e) => {
        e.preventDefault();
        this.props.cancelMeetup(meetupId)
        .then(() => props.history.push('/profile'));
      };
    };

    fetchHostOrGuests(){
        // Probably not needed
        // If logged_in
        // If you are the host, fetch guest information
        if(this.props.currentUser.session.id && this.props.meetup.host_id === this.props.currentUser.session.id){
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
        let meetupJoinLink;
        let meetupCancelButton = null;
        let meetupEditButton = null;
        const meetup = this.props.meetup;
        const currentUser = this.props.currentUser;
      
        // Logged In
        if (currentUser) {  
          // You are the host
          if (meetup.host_id === currentUser) {
            meetupJoinLink =
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
          else if (meetup.guests.includes(currentUser)) {
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
        if(this.props.meetup){
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
    }

    infoHostOrGuests(){
        const meetup = this.props.meetup;
        const currentUser = this.props.currentUser;
        // If you are host, show the guests
        if(currentUser.id === meetup.host_id){
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
                        <h3>The Host:</h3>
                        <div>HOST FACE</div>
                        {/* meetup.host */}
                    </ul>

                </div>      
            )
        }
    }


    render() {
        console.log(this.props);

        // debugger;
        return (
            <div>
                <a className="nav-link-item" href="#/meetups">Return to MeetUps Menu</a>
                {this.displayMeetup()}
            </div>
        )
    }  
}

export default MeetupShow;