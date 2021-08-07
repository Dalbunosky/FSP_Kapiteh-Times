import { connect } from 'react-redux';
import React from 'react';
import { clearSessionErrors, changePassword, signout } from '../../actions/session_actions';
import { receiveMessage, clearMessage } from '../../actions/message_actions';
import EditPassword from './edit_password';


const mapSTP = (state) => ({
        currentUser: state.users[state.session.id],
        errors: state.errors,
        message: state.message
})


const mapDTP = dispatch => {
    return {
        processForm: (passwords) => dispatch(changePassword(passwords)),
        receiveMessage: (message) => dispatch(receiveMessage(message)),
        clearErrors: () => dispatch(clearSessionErrors()),
        clearMessage: () => dispatch(clearMessage()),
        signout: () => dispatch(signout())
    };
};

export default connect(mapSTP, mapDTP)(EditPassword);
