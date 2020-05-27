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
        // console.log("LALALALALA").then(() => {this.props.fetchMeetups(this.props.host.id)}) //Fetch all upcoming meetups involving host. Filter out joins later.
    }
    componentWillUnmount(){
      // this.props.clearErrors();
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

            return(
                <div className="hostfile">
                    <h3>{name}</h3>
                    <div>Picture</div>
                    <p>{name}'s story</p>
                    <p>{host.story}</p>
                    <p>Host Contact</p>
                    <p>{name}'s upcoming meetups:</p>
                    {hosting.map (meetup => 
                        <MeetupCellContainer key={meetup.id} meetup={meetup} host={meetup.host_id} timing="future" type="checkout"/>
                    )}

                    <p>{name}'s reviews</p>

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



////////////////////////////////////////////////////////////////////////
    render() {
        // console.log(this.props.meetup);

        return (
            <div>
                {this.displayHost()}
            </div>
        )
    }  
}

export default HostShow;