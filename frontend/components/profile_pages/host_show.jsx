import React from 'react';
import { Link } from 'react-router-dom';

import MeetupCellContainer from './parts/meetup_pres_container'
import * as convertFunctions from '../../util/convertor_util';

// location: [], // [lat, lng, name of venue, address, city, state/province, zip, country]


class HostShow extends React.Component { 
    constructor(props){
        super(props)

    }
////////////////////////////////////////////////////////////////////////
    componentDidMount() {
        this.props.fetchHost(this.props.hostId);
        this.props.fetchMeetups(this.props.hostId);
    }

    componentWillUnmount(){
    //   this.props.clearErrors();
      this.props.clearMessage();
    }
  
////////////////////////////////////////////////////////////////////////

    displayHost(){
        if(this.props.host && this.props.host.host_status){ //After fetching host and ensuring host status
            const host = this.props.host;
            const name = host.name;
            const meetups = Array.from(this.props.meetups);
            let hosting = [];
            meetups.forEach(meetup => {
                if(meetup.host_id === host.id){
                    hosting.push(meetup);
                }
            })           
            const hostPic = (host.image_url && host.image_url != "" ?  host.image_url : window.staticImages.defaultPic)
            return(
                <div className="hostfile">
                    <div className="padding-20">
                        <h3>{name}</h3>
                        <div className="host-pic-full"><img src={hostPic} alt="Host Picture"/></div>
                        <p><br/><strong>{name}'s story</strong><br/>{host.story}</p>
                        <p><strong>Host Contact:</strong> {host.phone}</p>
                    </div>
                    <h3>{name}'s upcoming meetups:</h3>
                    {hosting.map (meetup => 
                        <MeetupCellContainer key={meetup.id} meetup={meetup} host={meetup.host_id} timing="future" type="checkout"/>
                    )}

                    <p>{name}'s reviews</p>

                </div>
            );
        }
        else{
            return(
            <div className="hostfile padding-20">
                <h3 >This host doesn't exist</h3>
            </div>
            )
        }
    }



////////////////////////////////////////////////////////////////////////
    render() {
        if(this.props.host && this.props.host.host_status){ //After fetching host and ensuring host status
            const host = this.props.host;
            const name = host.name;
            const meetups = Array.from(this.props.meetups);
            let hosting = [];
            meetups.forEach(meetup => {
                if(meetup.host_id === host.id){
                    hosting.push(meetup);
                }
            })           
            const hostPic = (host.image_url && host.image_url != "" ?  host.image_url : window.staticImages.defaultPic)
            return(
                <div className="hostfile">
                    <div className="padding-20">
                        <h3>{name}</h3>
                        <div className="host-pic-full"><img src={hostPic} alt="Host Picture"/></div>
                        <p><br/><strong>{name}'s story</strong><br/>{host.story}</p>
                        <p><strong>Host Contact:</strong> {host.phone}</p>
                    </div>
                    <h3>{name}'s upcoming meetups:</h3>
                    {hosting.map (meetup => 
                        <MeetupCellContainer key={meetup.id} meetup={meetup} host={meetup.host_id} timing="future" type="checkout"/>
                    )}

                    <h3>{name}'s reviews</h3>
                    <p>No reviews yet</p>

                </div>
            );
        }
        else{
            return(
            <div className="hostfile">
                <h3>This host doesn't exist</h3>
            </div>
            )
        }
    }  
}

export default HostShow;