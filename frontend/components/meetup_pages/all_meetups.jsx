import React from 'react';
// import MeetupCityRow from './parts/meetup_city_row';

// location: [], // [lat, lng, name of venue, address, city, state/province, zip, country]
// time: [],     // [DOW, month, day,  year, hour, minute]

//Something is coming off wrong for React, 
// says this is an object instead of the function 
// that react wants.


class AllMeetups extends React.Component { 
    constructor(props){
        super(props)
    }

    // componentDidMount() {
    //     // debugger;
    //     // this.props.meetups.fetchEvents();
    //     }

    // // rendering of individual meetups, from FWF
    // renderEvents() {
    //     console.log(this.props);
    //     if (this.props.meetups.meetups.length > 0) {
    //         return this.props.meetups.meetups.map((meetup, idx) => {
    //             const theday = meetup.date.split(" ")[0];
    //         const thedate = meetup.date.split(" ")[1].concat(" " + meetup.date.split(" ")[2])
    //         return (
    //             <div className="single-meetup" key={`meetupid-${idx}`}>
    //                 <p>{meetup.name}</p>
    //                 <p>{theday}</p>
    //                 <p>{thedate}</p>
    //                 <p>{meetup.openings}</p>
    //                 <p>{meetup.username}</p>
    //                 <img src={meetup.photoUrl} />
    //             </div>
    //         )
    //     })
    //     }
    // }

    render() {
        console.log(props)
        // // sort meetups by city

        // let cities = {}; //Set.new
        // this.props.meetups.map
        // if (cities.includes(meetup.city)){
        //     cities[meetup.city].push(meetup)
        // }
        // else {
        //     cities[meetup.city] = [meetup]
        // }

        return (
            <div>
                <div className="meetup-index-header">
                    <p className="show-header-one">SOLID FRIENDSHIPS</p>
                    <p className="show-header-two">They're here to stay.</p>
                </div>
                <div className="meetups">
                    <h3>Meetups at your city</h3>
                    {/* Meetups */}
                    {/* <MeetupCityRow city={city} meetups={meetups}> */}
                    <h3>Meetups everywhere else</h3>
                    {/* FUTURE: ALLOW FOR SEARCHING BY CITY */}
                    {/* Meetups */}
                    {/* <MeetupCityRow city={city} meetups={meetups}> */}
                </div>
            {/* <div className="event-index-one">{this.renderEvents()}</div> */}
            </div>
        )
    }  
}

export default AllMeetups;