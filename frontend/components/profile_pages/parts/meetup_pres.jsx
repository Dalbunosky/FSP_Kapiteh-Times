import React from 'react';
import * as convertFunctions from '../../../util/convertor_util';

class MeetUpCell extends React.Component {
    constructor(props) {
      super(props);
      // this.state = {
      //   email: '',
      //   password: '',
      //   host_status: false
      // };
      // this.handleSubmit = this.handleSubmit.bind(this);
  
    }
// const MeetUpCell = props =>{

    uniqueOps(type){
        if(type === "join"){
            // If you are joining a meetup, you want to see the host's contacts and (eventually) face
            // You want to be able to leave the meetup
            return(
                <div>
                    host name, contact, story, face, city, email
                    leave
                </div>
            )
        } else{
            // If you are hosting a meetup, you want to see who the guests are, and (eventually) remove them
            // You want to be able to edit/cancel the meetup
            return(
                <div>
                    guests names, contact, remove guests
                    edit, cancel
                </div>
            )
        }
    }

    render(){
        const meetup = this.props.meetup
        return(
            <div className="meetup-index-item">
                <ul className="meetup-details">
                    <li>Venue:   {meetup.location[2]}</li>
                    <li>Address: {meetup.location[3]} {meetup.location[4]}, {meetup.location[6]} {meetup.location[5]}</li>
                    <li>Date:    {convertFunctions.convertIntoDOW(meetup.starttime[0])}, {meetup.starttime[2]}/{meetup.starttime[3]}/{meetup.starttime[1]}</li>
                    <li>Time:    {meetup.starttime[4]}:{meetup.starttime[5]}</li>
                    {/* <li>End:    </li> */}
                    <li>Space:  {meetup.guests.length}/{meetup.capacity}</li>
                    <li>Topics and Icebreakers: <br/> {meetup.topic}</li>
                </ul>
                {this.uniqueOps(this.props.type)}
            </div>
        )
    }
}


// export const JoinedMeetups = props =>(
//     // <div className="my-meetup">
//     //     <p className="meetup-spec">Location:</p>
//     //     <p className="meetup-detail">{this.props.meetup.location}</p>
//     //     <p className="meetup-spec">Date:</p>
//     //     <p className="meetup-detail">{this.props.meetup.date}</p>
//     //     <p className="meetup-spec">Time:</p>
//     //     <p className="meetup-detail">{this.props.meetup.time}</p>
//     //     <p className="meetup-spec">Host:</p>
//     //     {/* <p className="meetup-detail">{meetup.location}</p> */}
//     //     {/* Host name, photo, button to host */}
//     //     <p className="meetup-detail">Host details</p>
//     //     {/* <button></button> Button to cancel meetup */}
//     //     {/* If in the future, cancel button */}
//     // </div>
//     <div className="meetup-index-item">
//     <ul className="meetup-details">
//       <li>Venue:   {meetup.location[2]}</li>
//       <li>Address: {meetup.location[3]} {meetup.location[4]}, {meetup.location[6]} {meetup.location[5]}</li>
//       <li>Date:    {convertFunctions.convertIntoDOW(meetup.starttime[0])}, {meetup.starttime[2]}/{meetup.starttime[3]}/{meetup.starttime[1]}</li>
//       <li>Time:    {meetup.starttime[4]}:{meetup.starttime[5]}</li>
//       {/* <li>End:    </li> */}
//       <li>Space:  {meetup.guests.length}/{meetup.capacity}</li>
//       <li>Topics and Icebreakers: <br/> {meetup.topic}</li>
//     </ul>
//   </div>
// )

// export const HostedMeetups = props =>(
//     <div className="my-meetup">
//         <p className="meetup-spec">Location:</p>
//         <p className="meetup-detail">{this.props.meetup.location}</p>
//         <p className="meetup-spec">Date:</p>
//         <p className="meetup-detail">{this.props.meetup.date}</p>
//         <p className="meetup-spec">Time:</p>
//         <p className="meetup-detail">{this.props.meetup.time}</p>
//         <p className="meetup-spec">Guests:</p>
//         <p className="meetup-detail">{meetup.location}</p>
//         {/* Guest names */}
//         {/* Guest contacts */}
//         {/* If in the future, cancel button */}
//     </div>
// )

export default MeetUpCell;