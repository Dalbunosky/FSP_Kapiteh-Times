import { connect } from "react-redux";
import NewMeetup from "./new_meetup";
import { createMeetup } from "../../actions/meetup_actions";
import { clearSessionErrors } from '../../actions/session_actions';

const mapSTP = (state) => {
  console.log(state);
  return({
    errors: state.errors,
    meetups: state.meetups,   // Doubt I need this here
    // session: state.session, // Can delete
    host: state.users[state.session.id]
    // users: state.users // Save for now for future guests
});}

const mapDTP = dispatch => ({
  // functions needed:
  processForm: Meetup => dispatch(createMeetup(Meetup)),
  clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapSTP, mapDTP)(NewMeetup);