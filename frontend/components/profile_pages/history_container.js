import { connect } from 'react-redux';
import React from 'react';

import { fetchHistoryMeetups } from '../../actions/meetup_actions';
import History from './history';


const mapSTP = (state) => {
    // console.log(state.users);
    // console.log(state.session);

    return {
        currentUser: state.users[state.session.id],
        meetups: state.meetups
        // joinedMeetups:  // Past meetups you joined
        // hostedMeetups:  // Past meetups you hosted
    };
};

const mapDTP = dispatch => {
    return {
        fetchMeetups: id => dispatch(fetchHistoryMeetups(id))
    };
};

export default connect(mapSTP, mapDTP)(History);
