import { connect } from "react-redux";
import NewMeetup from "./new_meetup";
import { createMeetup } from "../../actions/meetup_actions";
import { clearMeetupErrors } from '../../actions/meetup_actions';

const mapSTP = (state) => ({
    errors: state.errors,
    meetups: state.meetups,   // Doubt I need this here
    // session: state.session, // Can delete
    host: state.users[state.session.id]
    // users: state.users // Save for now for future guests
});

const mapDTP = dispatch => ({
  // functions needed:
  processForm: meetup => dispatch(createMeetup(meetup)),
  clearErrors: () => dispatch(clearMeetupErrors())
})

export default connect(mapSTP, mapDTP)(NewMeetup);