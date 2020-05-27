import { connect } from "react-redux";
import MeetupForm from "./edit_meetup";
import { fetchMeetup, createMeetup, editMeetup, clearMeetupErrors } from '../../../actions/meetup_actions';

const mapSTP = (state, ownprops) => {
  console.log(state.meetups);
  return({
    errors: state.errors,
    meetup: state.meetups[ownprops.match.params.meetupId],
    session: state.session,
    meetupId: ownprops.match.params.meetupId,
    host: state.users[state.session.id]
})}

const mapDTP = dispatch => ({
  // functions needed:
  fetchMeetup: (meetupId) => dispatch(fetchMeetup(meetupId)),
  processEdit: meetup => dispatch(editMeetup(meetup)),
  processCreate: meetup => dispatch(createMeetup(meetup)),
  clearErrors: () => dispatch(clearMeetupErrors())
})

export default connect(mapSTP, mapDTP)(MeetupForm);