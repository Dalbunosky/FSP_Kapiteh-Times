import React from 'react';
import * as convertFunctions from '../../util/convertor_util';
import MeetupCityRow from './parts/meetup_city_row';

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
        {console.log("MEETUP INDEX")}
        {console.log(this.props)}
        if(this.props.currentUser){
            return(
                <div className="nearby_meetups">
                    <h3>Upcoming meetups in and around {this.props.home_city}</h3>
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
        const metroArr = convertFunctions.quickSortCities(convertFunctions.orgMeetupsIntoMetroes(Array.from(this.props.meetups)));
        // console.log("MEETUP INDEX PROPS");
        // console.log(this.props);
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
                        {metroArr.map (metro =>
                            <MeetupCityRow metro={metro} keycheck={metroArr.indexOf(metro)} key={metroArr.indexOf(metro)} currentUser={this.props.currentUser}/>
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