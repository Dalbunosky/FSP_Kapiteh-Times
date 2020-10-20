import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';

import { signup, clearSessionErrors } from '../../actions/session_actions';
import { clearMessage, receiveMessage } from '../../actions/message_actions';
import SignUpForm from './signup_form';

const mapSTP = ({ errors }) => {
  return {
    // errors: errors.session,
    // errors: session,
    errors,
  };
};

const mapDTP = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    clearErrors: () => dispatch(clearSessionErrors()),
    clearMessage: () => dispatch(clearMessage())
  };
};

export default connect(mapSTP, mapDTP)(SignUpForm);
