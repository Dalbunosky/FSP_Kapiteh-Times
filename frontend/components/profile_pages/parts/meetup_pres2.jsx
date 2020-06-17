import React from 'react';
import * as convertFunctions from '../../../util/convertor_util';
// import { leaveMeetup } from '../../../util/meetup_api_util';
import { joinMeetup, leaveMeetup, editMeetup, cancelMeetup } from '../../../actions/meetup_actions';
import { fetchHost, fetchGuests } from '../../../actions/user_actions';
// import { fetchUser } from '../../../';

class MeetUpCell extends React.Component {
    constructor(props) {
        super(props);
        this.leaveMeetupButton = this.leaveMeetupButton.bind(this);
        this.editMeetupButton = this.editMeetupButton.bind(this);
        this.cancelMeetupButton = this.cancelMeetupButton.bind(this);
        this.removeGuestButton = this.removeGuestButton.bind(this);
        this.meetupActionChoices = this.meetupActionChoices.bind(this);
    }
// const MeetUpCell = props =>{
    componentDidMount(){
        if(this.props.type==="join"){
            fetchHost(this.props.meetup.host_id);
        }
        // else{
        //     fetchGuests(this.props.meetup.guests);
        // }
    }
    
    leaveMeetupButton(e){
        e.preventDefault();
        console.log("leaving Meetup")
        dispatch(leaveMeetup(this.props.meetup.id));
    }



    editMeetupButton(e){
        e.preventDefault();
        console.log("editting Meetup")
        // leaveMeetup(this.props.meetup.id);
        // this.props.push()
    }
    cancelMeetupButton(e){
        e.preventDefault();
        console.log("canceling Meetup")
        cancelMeetup(this.props.meetup.id);
    }
    removeGuestButton(e){
        e.preventDefault();
        console.log("kicking guest off")
    }

    uniqueOps(type){
        if(type === "join"){
            // If you are joining a meetup, you want to see the host's contacts and (eventually) face
            // You want to be able to leave the meetup

            if(this.props.users){
                const host = this.props.users[this.props.meetup.host_id]
                return(
                    <div className="meetup-right">
                        <div className="host-pic-thumb">Host picture</div>
                        <p>Host: {host.name}</p>
                        <p>Phone: {host.phone}</p>
                        <p>Email: {host.email}</p>
                        {/* {(timing == "future" ?
                            <div className="meetup_options">
                                <button onClick={this.leaveMeetup}>Leave Meetup</button>
                            </div> : ""
                        )} */}
                    </div>
            )}
        } else{
            // If you are hosting a meetup, you want to see who the guests are, and (eventually) remove them
            // You want to be able to edit/cancel the meetup

            // this.props.fetchUser(this.props.meetup.host_id);
            // console.log(this.props);
            return(
                <div className="meetup-right">
                    {this.props.meetup.guests.map(guest =>{
                        //fetch each guest
                        return(
                        <div className="guest-details">
                            <p>{guest.name}</p>
                            <p>{guest.phone}</p>
                            {/* <button onClick={this.removeGuest}>Remove Guest</button> */}
                        </div>
                        )
                    })}
                    {/* {(timing == "future" ?
                    <div className="meetup_options">
                        <button onClick={this.editMeetup}>Edit Meetup</button>
                        <button onClick={this.cancelMeetup}>Cancel Meetup</button>
                    </div> : ""
                    ) */}
                </div>
            )
        }
    }
    meetupActionChoices(timing, type){
        if(timing === "future"){
            if(type === "join"){return(
                <div className="meetup_options">
                <a href={`#/meetups/${this.props.meetup.id}`}>Checkout Meetup</a>
                    <button onClick={this.leaveMeetupButton}>Leave Meetup</button>
                </div>
            )} else{return(
                <div className="meetup_options">
                    <a href={`#/meetups/${this.props.meetup.id}`}>Checkout Meetup</a>
                    <button onClick={this.editMeetupButton}>Edit Meetup</button>
                    <button onClick={this.cancelMeetupButton}>Cancel Meetup</button>
                </div>
            )}
        }
    }

    render(){
        const meetup = this.props.meetup;
        const starttime = new Date(meetup.starttime*1000);
        const dayOfWeek = convertFunctions.convertIntoDOW(starttime.getDay());
        const month = convertFunctions.convertIntoMonth(starttime.getMonth());
        const hour = convertFunctions.convertIntoAMPM(starttime.getHours());
        return(
            <div className="meetup-index-item">
                <div className="meetup-left">
                    <ul className="meetup-details">
                        <li>Venue:   {meetup.location[2]}</li>
                        <li>Address: <br/>{meetup.location[3]} {meetup.location[4]}, {meetup.location[6]} {meetup.location[5]}</li>
                        <li>Date:    {dayOfWeek}, {month} {starttime.getDate()}, {starttime.getFullYear()}</li>
                        <li>Time:    {hour[0]}:{convertFunctions.formatMinute(starttime.getMinutes())} {hour[1]}</li>
                        {/* <li>End:    </li> */}
                        <li>Space:  {meetup.guests.length}/{meetup.capacity}</li>
                        {/* <li>Topics and Icebreakers: <br/> {meetup.topic}</li> */}
                    </ul>
                </div>
                {this.uniqueOps(this.props.type)}
                {this.meetupActionChoices(this.props.timing, this.props.type)}
            </div>
        )
    }
}

export default MeetUpCell;