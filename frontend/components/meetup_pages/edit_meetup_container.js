import { connect } from "react-redux";
import EditMeetup from "./edit_meetup";
// import { fetchMeetup, editMeetup } from "../../actions/meetup_actions";
import { fetchMeetup, editMeetup, clearMeetupErrors } from '../../actions/meetup_actions';

const mapSTP = (state, ownprops) => {
  console.log(state.meetups);
  return({
    errors: state.errors,
    meetup: state.meetups[ownprops.match.params.meetupId],
    session: state.session,
    meetupId: ownprops.match.params.meetupId,
    // users: state.users,
    host: state.users[state.session.id]
})}

const mapDTP = dispatch => ({
  // functions needed:
  fetchMeetup: (meetupId) => dispatch(fetchMeetup(meetupId)),
  processForm: meetup => dispatch(editMeetup(meetup)),
  clearErrors: () => dispatch(clearMeetupErrors())
})

export default connect(mapSTP, mapDTP)(EditMeetup);