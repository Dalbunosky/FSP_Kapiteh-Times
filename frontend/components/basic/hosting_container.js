import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';

// import sessionReducer from '../../reducers/session_reducer'
import { receiveCurrentUser, editUser, clearSessionErrors } from '../../actions/session_actions';
import { clearMessage } from '../../actions/message_actions';
import Hosting from './hosting';


const mapSTP = (state) => {
    return {
        session: state.session.id,
        currentUser: state.users[state.session.id],
        errors: state.errors
    };
};

const mapDTP = dispatch => {
    return {
        receiveCurrentUser: () => dispatch(receiveCurrentUser()),
        processForm: (user) => dispatch(editUser(user)),
        clearErrors: () => dispatch(clearSessionErrors()),
        clearMessage: () => dispatch(clearMessage())
    };
};

export default connect(mapSTP, mapDTP)(Hosting);