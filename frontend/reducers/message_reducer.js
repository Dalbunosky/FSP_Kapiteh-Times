import {
    RECEIVE_MESSAGE,
    CLEAR_MESSAGE
  } from '../actions/message_actions';
  
  export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_MESSAGE:
        return action.message;
      case CLEAR_MESSAGE:
        return "";
      default:
        return "";
    }
  };
  