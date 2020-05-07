import React from 'react';
import * as convertFunctions from '../../util/convertor_util';
// import MeetupCityRow from './parts/meetup_city_row';

// location: [], // [lat, lng, name of venue, address, city, state/province, zip, country]

//Something is coming off wrong for React, 
// says this is an object instead of the function 
// that react wants.


class AllMeetups extends React.Component { 
    constructor(props){
        super(props)

    }

// Probably need this because otherwise meetups prop is null
// With user, once you're logged in, state will always have your info on hand until logout
// With meetups, not so much.

    componentDidMount() {   
        // const user = this.props.currentUser.id;
        // const listOfMeetups = this.props.getMeetups(user);
        this.props.fetchMeetups();
        // console.log(listOfMeetups)
    }

    meetupsNearUser(){
        if(this.props.currentUser){
            return(
                <div className="nearby_meetups">
                    <h3>Upcoming meetups at your city</h3>
                    {/* <p>{this.props.currentUser}</p> */}
                    {/* Meetups */}
                    {/* <MeetupCityRow city={city} meetups={meetups}> */}
                </div>
            )
        }
    }

    meetupLabel(){
        if(this.props.currentUser){
            return(
                <h3>Upcoming meetups everywhere else</h3>
            )
        } else {
            return(
                <h3>All upcoming meetups</h3>
            )
        }

    }

    render() {
        const meetups = Array.from(this.props.meetups);
        const metroArr = convertFunctions.orgMeetupsIntoMetroes(Array.from(this.props.meetups));

        return (
            <div>
                <div className="meetup-index-header">
                    <p className="show-header-one">SOLID FRIENDSHIPS</p>
                    <p className="show-header-two">They're here to stay.</p>
                </div>
                <div className="meetups">
                    {this.meetupsNearUser()}
                    <div className="all_other_meetups">
                        {this.meetupLabel()}

                        {meetups.map (meetup => 
                            <div className="meetup-index-item">
                                <ul className="meetup-details">
                                    {}
                                    <li>Venue:   {meetup.location[2]}</li>
                                    <li>Address: {meetup.location[3]} {meetup.location[4]}, {meetup.location[6]} {meetup.location[5]}</li>
                                    <li>Date:    {convertFunctions.convertIntoDOW(meetup.starttime[0])}, {meetup.starttime[2]}/{meetup.starttime[3]}/{meetup.starttime[1]}</li>
                                    <li>Date:    {convertFunctions.convertIntoDOW(meetup.starttime[0])}, {meetup.starttime[2]}/{meetup.starttime[3]}/{meetup.starttime[1]}</li>
                                    <li>Time:    {meetup.starttime[4]}:{meetup.starttime[5]}</li>
                                    {/* <li>End:    </li> */}
                                    <li>Space:  {meetup.guests.length}/{meetup.capacity}</li>
                                </ul>
                            </div>
                            // <MeetupCellContainer key={meetup.id} meetup={meetup} />
                        )}
                        {/* FUTURE: ALLOW FOR SEARCHING BY CITY */}
                        {/* Meetups */}
                        {/* <MeetupCityRow city={city} meetups={meetups}> */}
                    </div>
                </div>
            {/* <div className="event-index-one">{this.renderEvents()}</div> */}
            </div>
        )
    }  
}

export default AllMeetups;