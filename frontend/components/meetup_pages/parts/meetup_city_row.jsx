import React from 'react';
import MeetupCellContainer from './meetup_cell_container';
import MeetupCell from './meetup_cell';
import * as convertFunctions from '../../../util/convertor_util'

const CityRow = (props) =>{
    // console.log(props);
    const metro = props.metro;
    // componentDidMount() {
    //     this.props.requestAllCityMeetups(this.props.city);
    // };
    
    // componentWillReceiveProps(nextProps) {
    //     if (this.props.city !== nextProps.city) {
    //         this.props.requestAllCityMeetups(nextProps.city);
    //     }
    // };

    // render(){
        // console.log(props);
        const meetups = convertFunctions.quickSortMeetups(metro.meetups);

        return(
            <div className="cityRow">
                <h3>{metro.name}</h3>
                {/* <p>{props.keycheck}</p> */}
                <div className="meetup">
                    { meetups.map(meetup => <MeetupCellContainer key={meetups.indexOf(meetup)} meetup={meetup} currentUser={props.currentUser}/>)}
                </div>
            </div>
        )
    // }

    
}

export default CityRow;