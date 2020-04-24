import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';

// import sessionReducer from '../../reducers/session_reducer'
// import { receiveCurrentUser } from '../../actions/session_actions';
import Profile from './profile';


const mapSTP = (state) => {
    // console.log(state.users);
    // console.log(state.session);
    return {
        currentUser: state.users[state.session.id],
        // joinedMeetups:  // Future meetups you are joining
        // hostedMeetups:  // Future meetups you are hosting
    };
};

const mapDTP = dispatch => {
    return {
        // getUser: () => dispatch(getUser()),
        // removeGuest: id => dispatch(removeGuest(id)),
        // removeMeetup: id => dispatch(removeMeetup(id))

        // processForm: (user) => dispatch(signin(user)),
    };
};

export default connect(mapSTP, mapDTP)(Profile);
