import { RECEIVE_TICKET, CANCEL_TICKET } from '../../actions/ticket_actions';

const attendeesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TICKET:
        return action.attendee;
    case CANCEL_TICKET:
        return [];
    default:
        return state;
  }
};

export default attendeesReducer;