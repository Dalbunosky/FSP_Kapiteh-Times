import React from 'react';
import { Link } from 'react-router-dom';

import * as convertFunctions from '../../util/convertor_util';

// location: [], // [lat, lng, name of venue, address, city, state/province, zip, country]


class MeetupShow extends React.Component { 
    constructor(props){
        super(props)

        this.state ={
          klass: "noshow"
        }
        this.confirmCancel = this.confirmCancel.bind(this);
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
      const meetupId = this.props.meetup.id;
      return(e) => {
        e.preventDefault();
        this.props.history.push(`/meetups/${this.props.meetup.id}/edit`);
        // this.props.editMeetup(this.props.meetupId)
        // .then(() => this.props.history.push(`/meetups/edit/${this.props.meetupId}`));
      };
    };
  
    handleCancelMeetup(e){
      if(this.props.meetup && this.props.session.id === this.props.meetup.host_id){
        return(e) => {
          e.preventDefault();
          this.props.cancelMeetup(this.props.meetupId)
          .then(() => this.props.history.push('/meetups'));
        };
      }
    };

    confirmCancel(e){
      e.preventDefault();
      this.setState({
        klass: ((this.state.klass==="noshow") ? "confirmation" : "noshow")
      });
    }

    // toggleClass(){
    //   e.preventDefault();
    //   this.setState({
    //     klass: ((this.state.klass==="noshow") ? "confirmation" : "noshow")
    //   });
    // }

  ////////////////////////////////////////////////////////////////////////
    fetchHostOrGuests(){
        // Probably not needed
        // If logged_in
        if(this.props.session.id && this.props.meetup.host_id === this.props.session.id){
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
            <p className="green">
                YOU'RE HOSTING THIS MEETUP
            </p>;
      
            meetupEditButton =
            <button className="meetup-edit-button button orange" onClick={this.handleEdit(meetup.id)}>
                EDIT MEETUP
            </button>;
      
            meetupCancelButton =
            <button className="button red" onClick={this.confirmCancel}>
              CANCEL THIS MEETUP
            </button>;
            // meetupEditButton =
            // <Link to={`/hosting/${props.meetup.id}`}>Edit This Meetup</Link>;
          } 
          // You've joined
          else if (meetup.guest_ids.includes(currentUser.id)) {
          // else if (meetup.guests.includes(currentUser)) {
            meetupJoinLink =
            <p className="green">
              YOU JOINED THIS MEETUP
            </p>;
      
            meetupCancelButton =
            <button className="button red" onClick={this.handleUnattend(meetup.id)}>
              CANCEL YOUR SPOT
            </button>;
          } 
          // Meetup full, you haven't joined
          else if (meetup.guests.length >= meetup.capacity) {
            meetupJoinLink =
            <p className="button green">
              MEETUP IS FULL
            </p>;
            // // FUTURE UPGRADE TO WAITLIST
            // <button className="button green">
            //   YOU JOINED THIS MEETUP
            // </button>;
          } 
      
          // You haven't joined, there's space
          else {
            meetupJoinLink =
            <button className="button red" onClick={this.handleAttend(meetup.id)}>
              JOIN THIS MEETUP!
            </button>;
            // <a className="button orange" onClick={handleAttend(props.meetup.id)}>
            //   CHECKOUT THIS MEETUP
            // </a>;
          }
        } 
        // Not logged in
        else {
            // There is space
            if(meetup.guests.length < meetup.capacity){
              meetupJoinLink =
              <Link className="button sign-in-to-schedule" to="/signin">
              Sign in to join
              </Link>;
      
              meetupCancelButton =
              <Link className="button sign-in-to-schedule" to="/signup">
              Sign up to join
              </Link>;
            }
            // Meetup is full
            else{
              meetupJoinLink =
              <p className="button orange">Meetup is full</p>
            }
            
        }
        return(
            <div className="meetup-action">
                {meetupJoinLink}
                {meetupCancelButton}
                {meetupEditButton}
            </div>
        )
    }

    ggMapLink(){
      let url = "https://www.google.com/maps/place/";
      const location = this.props.meetup.location;
      let strAddress = "";
      location[3].split("").forEach(letter => {strAddress += (letter === " " ? "+" : letter)})
      url = url + `${strAddress},+${location[4]},+${location[5]}+${location[6]}/`
      return url
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
                    <div className="meetup-show">
                      <div className="meetup-left">
                          <ul className="meetup-details">
                              <li><strong>Venue:  </strong>{meetup.location[2]}</li>
                              <li><strong>Address:</strong>{meetup.location[3]} {meetup.location[4]} {meetup.location[5]},{meetup.location[6]}</li>
                              <li><strong>Date:                        </strong>{date}</li>
                              <li><strong>Time:   </strong>{time}</li>
                              {/* <li>End:    </li> */}
                              <li><strong>Space:  </strong>{meetup.guests.length}/{meetup.capacity}</li>
                              <li><strong>Topics and Icebreakers: </strong><br/>{meetup.topic}</li>
                          </ul>
                          {/* <a href={"https://www.google.com/maps/place/1165+Gilman+Ave,+San+Francisco,+CA+94124/"}>Google Maps</a> */}
                          <a href={this.ggMapLink()}>Location on map (Google)</a>
                      </div>
                      {this.infoHostOrGuests()}
                    </div>
                    {this.meetupActions()}
                </div>
            )
        }
        else{
          return(
            <div className="meetup-show padding-20">
                    <p className="font-40">We regret to inform you that... <br/><strong>THIS MEETUP DOES NOT EXIST!</strong><br/><br/>
                      <a href="#/meetups">Go back to meetups</a>
                    </p>
                    
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
                <div className="meetup-right">
                    <ul className="meetup-guests">
                        <h3>Guests:</h3>
                        {meetup.guests.map((guest, i) => {
                            if (guest.phone)
                                return(<li key={`guest-${i+1}`}><strong>Guest: </strong>{guest.name} <br/> <strong>- Phone: </strong>{guest.phone}</li>)
                            else 
                                return(<li key={`guest-${1+i}`}><strong>Guest: </strong>{guest.name}</li>)
                        })}
                    </ul>
                </div>      
            )
        }
        // Else, show the host
        else{
            const hostPic = (meetup.hostImage && meetup.hostImage != "" ?  meetup.hostImage : window.staticImages.defaultPic)
            return(
                <div className="meetup-right">
                    <ul className="meetup-guests">
                      <div className="host-pic-full"><a href={`#/host/${host.id}`}>
                        <img src={hostPic} alt="Host Picture"/>
                      </a></div>
                        <h3>The Host: {host.name}</h3>
                        <p><strong>Home region: </strong>{host.home_city}</p>
                        <p><strong>Contact:</strong></p>
                        <ul>
                          <p><strong>Phone number: </strong>{host.phone}</p>
                          <p><strong>Email: </strong>{host.email}</p>
                        </ul>
                        <p><strong>{host.name}'s Life Story: </strong><br/>{host.story}</p>
                    </ul>

                </div>      
            )
        }
    }

////////////////////////////////////////////////////////////////////////
    render() {
        return (
            <div className="meetup">
                <div className="padding-20">
                  <a href="#/meetups">Return to MeetUps Menu</a>
                </div>
                {this.displayMeetup()}

              <div className={this.state.klass}>
                <p>Are you sure you want to cancel this meetup?</p>
                <button onClick={this.confirmCancel}>No! I clicked on accident!</button>
                <button onClick={this.handleCancelMeetup()}>Yes.</button>
              </div>
            </div>


        )
    }  
}

export default MeetupShow;