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
        this.props.fetchMeetups();
        if(this.props.currentUser){
            this.props.fetchUser(this.props.currentUser);
        }
    }

    meetupsNearUser(homeCityCell){
        if(this.props.currentUser){
            if(homeCityCell){
                return(
                    <div className="nearby_meetups">
                        <h3>Upcoming meetups in and around {this.props.currentUserCity}</h3>
                        <MeetupCityRow metro={homeCityCell} key="0" currentUser={this.props.currentUser}/>
                    </div>
                )
            }
            else{
                return(
                    <div className="nearby_meetups">
                        <h3>Upcoming meetups in and around {this.props.currentUserCity}</h3>
                        <p>Looks like no one is hosting in your area.¯\_(ツ)_/¯ <br/> You could host one!</p>
                    </div>
                )
            }
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
        const metroArr0 = convertFunctions.orgMeetupsIntoMetroes(Array.from(this.props.meetups));

        let currentUserCity;
        let homeCityMeetups = "";
        if(this.props.currentUser){currentUserCity = this.props.currentUserCity;}
        else{currentUserCity = null;}
        const metroArr = convertFunctions.quickSortCities(metroArr0, currentUserCity);

        if((metroArr.length > 0) && (currentUserCity === metroArr[0].name)){homeCityMeetups = metroArr.shift()}

        return (
            <div>
                <div className="meetup-index-header">
                    <p className="show-header-one">SOLID FRIENDSHIPS</p>
                    <p className="show-header-two">They're here to stay.</p>
                </div>
                <div className="meetups">
                    {this.meetupsNearUser(homeCityMeetups)}
                    <div className="all_other_meetups">
                        {this.meetupLabel()}
                        {metroArr.map (metro =>
                            <MeetupCityRow metro={metro} key={metroArr.indexOf(metro)} currentUser={this.props.currentUser}/>
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