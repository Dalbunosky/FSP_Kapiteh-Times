import { connect } from 'react-redux';
import React from 'react';
import { fetchProfileMeetups } from '../../actions/meetup_actions';
import { clearMessage } from '../../actions/message_actions';
// import { Link } from 'react-router-dom';

// import sessionReducer from '../../reducers/session_reducer'
// import { receiveCurrentUser } from '../../actions/session_actions';
import Profile from './profile';


const mapSTP = (state) => {
    // console.log("STATE", state.users[state.session.id].message);
    // console.log(state.session);
    return {
        currentUser: state.users[state.session.id],
        meetups: state.meetups,
        // joinedMeetups:  // Future meetups you are joining
        // hostedMeetups:  // Future meetups you are hosting
    };
};

const mapDTP = dispatch => {
    return {
        fetchMeetups: id => dispatch(fetchProfileMeetups(id)),
        // fetchUser: () => dispatch(fetchUser()),
        // removeGuest: id => dispatch(removeGuest(id)),
        // removeMeetup: id => dispatch(removeMeetup(id))
        // processForm: (user) => dispatch(signin(user)),,
        clearMessage: () => dispatch(clearMessage())
    };
};

export default connect(mapSTP, mapDTP)(Profile);
