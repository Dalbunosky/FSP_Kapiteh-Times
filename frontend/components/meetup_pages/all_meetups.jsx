import React from 'react';

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

    renderEvents() {
        console.log(this.props);
        if (this.props.meetups.meetups.length > 0) {
            return this.props.meetups.meetups.map((meetup, idx) => {
                const theday = meetup.date.split(" ")[0];
            const thedate = meetup.date.split(" ")[1].concat(" " + meetup.date.split(" ")[2])
            return (
                <div className="single-meetup" key={`meetupid-${idx}`}>
                    <p>{meetup.name}</p>
                    <p>{theday}</p>
                    <p>{thedate}</p>
                    <p>{meetup.openings}</p>
                    <p>{meetup.username}</p>
                    <img src={meetup.photoUrl} />
                </div>
            )
        })
    }
    }

    render() {
        // debugger;
        return (
            <>
            <div className="meetup-index-header">
                <p className="show-header-one">SOLID FRIENDSHIPS</p>
                <p className="show-header-two">They're here to stay.</p>
            </div>
                <div className="zero-index"></div>
            {/* <div className="event-index-one">{this.renderEvents()}</div> */}
            </>
        )
    }  
}

export default AllMeetups;