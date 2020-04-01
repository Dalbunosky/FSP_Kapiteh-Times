import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_SESSION_ERRORS
} from '../actions/session_actions';

import {
  RECEIVE_MEETUPS,
  RECEIVE_MEETUP,
  MEETUP_HAS_ERRORS,
  CLEAR_MEETUP_ERRORS,
} from '../actions/meetup_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_SESSION_ERRORS:
      return [];
    case RECEIVE_CURRENT_USER:
      return [];


    case MEETUP_HAS_ERRORS:
      return action.errors;
    case CLEAR_MEETUP_ERRORS:
      return [];
    case RECEIVE_MEETUP:
      return [];
    case RECEIVE_MEETUPS:
      return [];

    // MIGHT NEED SOME FOR TICKETS, SUCH AS FOR OVERCAPACITY

    default:
      return state;
  }
};
