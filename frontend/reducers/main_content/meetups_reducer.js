import {
    // RECEIVE_REVIEW,
    RECEIVE_MEETUPS,
    RECEIVE_MEETUP,
    MEETUP_HAS_ERRORS,    // At errors reducer
    CLEAR_MEETUP_ERRORS,  // At errors reducer
    CANCEL_MEETUP
  } from '../../actions/meetup_actions';
  
  const meetupsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
      case RECEIVE_MEETUPS:
        return action.meetups;
      case RECEIVE_MEETUP:
        const newMeetUp = { [action.meetup.id]: action.meetup };
        return Object.assign({}, state, newMeetUp);
      // case MEETUP_HAS_ERRORS:
      //   return lalala;
      // case CLEAR_MEETUP_ERRORS:
      //   return [];
      case CANCEL_MEETUP:
        return { [action.meetup.id]: null };

      // case RECEIVE_REVIEW:
      //   const { review, average_rating } = action;
      //   const newState = Object.assign({}, state);
      //   newState[review.meetup_id].reviewIds.push(review.id);
      //   newState[review.meetup_id].average_rating = average_rating;
      //   return newState;
      default:
        return state;
    }
  };
  
  export default meetupsReducer;
  