import React from 'react';
import * as convertFunctions from '../../../util/convertor_util';
// import { leaveMeetup } from '../../../util/meetup_api_util';
// import { joinMeetup, leaveMeetup, editMeetup, cancelMeetup } from '../../../actions/meetup_actions';
// import { fetchHost, fetchGuests } from '../../../actions/user_actions';
// import { fetchUser } from '../../../';

class MeetUpCell extends React.Component {
    constructor(props) {
        super(props);
        this.leaveMeetup = this.leaveMeetup.bind(this);
        this.editMeetup = this.editMeetup.bind(this);
        this.cancelMeetup = this.cancelMeetup.bind(this);
        this.removeGuest = this.removeGuest.bind(this);
        this.meetupActionChoices = this.meetupActionChoices.bind(this);
    }
// const MeetUpCell = props =>{
    componentDidMount(){
        if(this.props.type==="join"){
            this.props.fetchHost(this.props.meetup.host_id);
        }
        // else{
        //     fetchGuests(this.props.meetup.guests);
        // }
    }
    
    leaveMeetup(e){
        e.preventDefault();
        // console.log("leaving Meetup")
        this.props.leaveMeetup(this.props.meetup.id);
    }



    editMeetup(e){
        e.preventDefault();
        const meetupId = this.props.meetup.id;
        // console.log("editting Meetup")
        this.props.history.push(`/meetups/${this.props.meetup.id}/edit`);

    }
    cancelMeetup(e){
        e.preventDefault();
        // console.log("canceling Meetup")
        this.props.cancelMeetup(this.props.meetup.id)
    }

    removeGuest(e){
        e.preventDefault();
        // console.log("kicking guest off")
    }

    uniqueOps(type){
        if(type === "join"){
            // If you are joining a meetup, you want to see the host's contacts and (eventually) face
            // You want to be able to leave the meetup

            if(this.props.users[this.props.meetup.host_id]){
                const host = this.props.users[this.props.meetup.host_id];
                return(
                    <div className="meetup-right">
                        <div className="host-pic-thumb margin-10"><a href={`#/host/${host.id}`}>
                            <img src={host.image_url} alt="Host Picture"/>
                        </a></div>
                        <p><b>Host: </b>{host.name}</p>
                        <p><b>Phone: </b>{host.phone}</p>
                        <p><b>Email: </b>{host.email}</p>
                        {/* {(timing == "future" ?
                            <div className="meetup-options">
                                <button onClick={this.leaveMeetup}>Leave Meetup</button>
                            </div> : ""
                        )} */}
                    </div>
            )}
        } else if(type === "host"){
            // If you are hosting a meetup, you want to see who the guests are, and (eventually) remove them
            // You want to be able to edit/cancel the meetup

            // this.props.fetchUser(this.props.meetup.host_id);
            // console.log(this.props);
            return(
                <div className="meetup-right">
                    <h3>Guests</h3>
                    {this.props.meetup.guests.map(guest =>(
                        <p key={guest.id}>{guest.name} <b>Phone: </b>{guest.phone}</p>
                        //fetch each guest
                        // return(
                        // <div className="guest-details">
                        //     <p>{guest.name}</p>
                        //     <p>{guest.phone}</p>
                        //     {/* <button onClick={this.removeGuest}>Remove Guest</button> */}
                        // </div>
                        // )
                    ))}
                    {/* {(timing == "future" ?
                    <div className="meetup-options">
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
                <div className="meetup-options">
                <a href={`#/meetups/${this.props.meetup.id}`}>Checkout Meetup</a>
                    <button onClick={this.leaveMeetup}>Leave Meetup</button>
                </div>
            )} else if(type === "host"){return(
                <div className="meetup-options">
                    <a href={`#/meetups/${this.props.meetup.id}`}>Checkout Meetup</a>
                    <button onClick={this.editMeetup}>Edit Meetup</button>
                    {/* <button onClick={this.cancelMeetup}>Cancel Meetup</button> */}
                </div>
            )} else{return(
                <div className="meetup-options">
                    <a className="blue" href={`#/meetups/${this.props.meetup.id}`}>Checkout Meetup</a>
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
                        <li><b>Venue: </b>  {meetup.location[2]}</li>
                        <li><b>Address: </b><br/>{meetup.location[3]} <br/>{meetup.location[4]}, {meetup.location[6]} {meetup.location[5]}</li>
                        <li><b>Date: </b>   {dayOfWeek}, {month} {starttime.getDate()}, {starttime.getFullYear()}</li>
                        <li><b>Time: </b>   {hour[0]}:{convertFunctions.formatMinute(starttime.getMinutes())} {hour[1]}</li>
                        {/* <li>End:    </li> */}
                        <li><b>Space: </b> {meetup.guests.length}/{meetup.capacity}</li>
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