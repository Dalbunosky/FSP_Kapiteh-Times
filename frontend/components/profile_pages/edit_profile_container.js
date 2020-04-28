import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';

// import sessionReducer from '../../reducers/session_reducer'
// import { receiveCurrentUser } from '../../actions/session_actions';
import { editUser, clearSessionErrors, closeAcct } from '../../actions/session_actions';
import EditProfile from './edit_profile';


const mapSTP = (state) => ({
        currentUser: state.users[state.session.id],
        errors: state.errors
})


const mapDTP = dispatch => {
    return {
        processForm: (user) => dispatch(editUser(user)),
        // getUser: () => dispatch(getUser()),
        clearErrors: () => dispatch(clearSessionErrors()),
        closeAccount: () => dispatch(closeAcct())
    };
};

export default connect(mapSTP, mapDTP)(EditProfile);
