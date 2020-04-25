import { connect } from "react-redux";
import EditMeetup from "./new_meetup";
import { createMeetup } from "../../actions/meetup_actions";
import { clearMeetupErrors } from '../../actions/meetup_actions';

const mapSTP = (state) => ({
    errors: state.errors,
    meetups: state.meetups,   // Doubt I need this here
    host: state.users[state.session.id]
});

const mapDTP = dispatch => ({
  // functions needed:
  processForm: meetup => dispatch(editMeetup(meetup)),
  clearErrors: () => dispatch(clearMeetupErrors())
})

export default connect(mapSTP, mapDTP)(EditMeetup);