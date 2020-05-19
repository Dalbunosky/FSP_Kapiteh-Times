import {
    // RECEIVE_REVIEW,
    RECEIVE_MEETUPS,
    RECEIVE_MEETUP,
    MEETUP_HAS_ERRORS,    // At errors reducer
    CLEAR_MEETUP_ERRORS,  // At errors reducer
    MEETUP_CANCELLED
  } from '../../actions/meetup_actions';
  
  const meetupsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
      case RECEIVE_MEETUPS:
        return action.meetups;
      case RECEIVE_MEETUP:
        const newMeetup = { [action.meetup.id]: action.meetup };
        return Object.assign({}, state, newMeetup);
      // case MEETUP_HAS_ERRORS:
      //   return lalala;
      // case CLEAR_MEETUP_ERRORS:
      //   return [];
      case MEETUP_CANCELLED:
        // return state;
        return [];

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
  // Meetup.new(host_id: 16, capacity: 1, topic: "test", metro_area: "Silicon Valley", starttime: 1590319380, location: ["181", "181", "test", "test", "test", "test", "test", "test"]).save