import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_HOST } from '../../actions/user_actions';

import { RECEIVE_REVIEW, RECEIVE_MEETUP } from '../../actions/meetup_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_HOST:
      // return merge({}, state, { [action.host.id]: action.host })
      return Object.assign({}, state, { [action.host.id]: action.host });
      // return Object.assign({}, state, { [action.host.id]: action.host });
//    case RECEIVE_GUESTS:
      // return action.guests;
      // return merge({}, state, guests)
//      return Object.assign({}, state, guests);
    // case RECEIVE_REVIEW:
    //   return Object.assign({}, state, { [action.author.id]: action.author });
    case RECEIVE_MEETUP:
      // return Object.assign({}, state, { [action.host.id]: action.host });
      return Object.assign({}, state, action.authors);
    default:
      return state;
  }
};

export default usersReducer;
