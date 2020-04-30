import React from 'react';
import * as convertFunctions from '../../../util/convertor_util';
// import { fetchUser } from '../../../';

class MeetUpCell extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //   email: '',
        //   password: '',
        //   host_status: false
        // };
        // this.handleSubmit = this.handleSubmit.bind(this);
        // console.log(props);
        // console.log(props.type);
    }
// const MeetUpCell = props =>{
    componentDidMount(type){
        if(this.props.type==="join"){
            this.props.fetchHost(this.props.meetup.host_id);
        }
        // else{
        //     this.props.fetchGuests(this.props.meetup.guests);
        // }
    }

    uniqueOps(type){
        if(type === "join"){
            // If you are joining a meetup, you want to see the host's contacts and (eventually) face
            // You want to be able to leave the meetup

            const host = this.props.users[this.props.meetup.host_id];
            if(host){
            return(
                <div className="meetup-right">
                    <div>Host picture</div>
                    <p>Host: {host.name}</p>
                    <p>Phone: {host.phone}</p>
                    <p>Email: {host.email}</p>
                    <button>Leave Meetup</button>
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
                            <button>Remove Guest</button>
                        </div>
                        )
                    })}
                    <button>Edit Meetup</button>
                    <button>Cancel Meetup</button>
                </div>
            )
        }
    }

    render(){
        const meetup = this.props.meetup
        return(
            <div className="meetup-index-item">
                <div className="meetup-left">
                    <ul className="meetup-details">
                        <li>Venue:   {meetup.location[2]}</li>
                        <li>Address: {meetup.location[3]} {meetup.location[4]}, {meetup.location[6]} {meetup.location[5]}</li>
                        <li>Date:    {convertFunctions.convertIntoDOW(meetup.starttime[0])}, {meetup.starttime[2]}/{meetup.starttime[3]}/{meetup.starttime[1]}</li>
                        <li>Time:    {meetup.starttime[4]}:{convertFunctions.formatMinute(meetup.starttime[5])}</li>
                        {/* <li>End:    </li> */}
                        <li>Space:  {meetup.guests.length}/{meetup.capacity}</li>
                        <li>Topics and Icebreakers: <br/> {meetup.topic}</li>
                    </ul>
                </div>
                {this.uniqueOps(this.props.type)}
            </div>
        )
    }
}

export default MeetUpCell;