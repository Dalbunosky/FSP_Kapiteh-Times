import { connect } from 'react-redux';
import React from 'react';
import { clearSessionErrors, changePassword  } from '../../actions/session_actions';
import { receiveMessage, clearMessage } from '../../actions/message_actions';
import EditPassword from './edit_password';


const mapSTP = (state) => ({
        currentUser: state.users[state.session.id],
        errors: state.errors
})


const mapDTP = dispatch => {
    return {
        processForm: (passwords) => dispatch(changePassword(passwords)),
        receiveMessage: (message) => dispatch(receiveMessage(message)),
        clearErrors: () => dispatch(clearSessionErrors()),
        clearMessage: () => dispatch(clearMessage())
    };
};

export default connect(mapSTP, mapDTP)(EditPassword);
