import { connect } from 'react-redux';
import MeetupShow from './meetup';
import { fetchMeetup, editMeetup, cancelMeetup, joinMeetup, leaveMeetup } from '../../actions/meetup_actions';
import { fetchHost, fetchGuests } from '../../actions/user_actions';
import { fetchUser } from '../../actions/session_actions';
// import { createGuest } from '../../actions/guest_actions';

const mapSTP = (state, ownprops) => {
  // Need meetup, user, session
  // meetup host and guests come later
  // ownprops.match.params.id
  console.log(state);
  console.log("HERRRRRRRRRRRRRRRRRRE");
  // console.log(ownprops);
  return({
    meetup: state.meetups[ownprops.match.params.meetupId],
    session: state.session,
    currentUser: state.users[state.session.id],
    meetupId: ownprops.match.params.meetupId,
    // host: state.users[state.meetups[ownprops.match.params.meetupId].host_id]
})}

const mapDTP = (dispatch) => ({
  // Fetch, join, leave, edit, cancel
    fetchMeetup: (meetupId) => dispatch(fetchMeetup(meetupId)),
  // fetch User (hosts and guests)
    fetchHost: (hostId) => dispatch(fetchHost(hostId)),
    fetchGuests: (guestIds) => dispatch(fetchGuests(guestIds)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),

  // remove guest/Edit/Cancel meetup (hosts)
    editMeetup: (meetupId) => dispatch(editMeetup(meetupId)),
    cancelMeetup: (meetupId) => dispatch(cancelMeetup(meetupId)),
  // join/leave(guests) meetup
    joinMeetup: (meetupId) => dispatch(joinMeetup(meetupId)),
    leaveMeetup: (meetupId) => dispatch(leaveMeetup(meetupId)),
})

export default connect(mapSTP, mapDTP)(MeetupShow);