import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';

import { signin, clearSessionErrors } from '../../actions/session_actions';
import SignInForm from './signin_form';

const mapSTP = ({errors}) => {
  return {
    // errors: errors.session,
    // errors: session,
    errors
  };
};

const mapDTP = dispatch => {
  return {
    processForm: (user) => dispatch(signin(user)),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapSTP, mapDTP)(SignInForm);
