import {
  RECEIVE_CURRENT_USER,
  SIGNOUT_CURRENT_USER,
  CLOSE_USER_ACCOUNT
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case CLOSE_USER_ACCOUNT:
      return { id: null };
    case SIGNOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
