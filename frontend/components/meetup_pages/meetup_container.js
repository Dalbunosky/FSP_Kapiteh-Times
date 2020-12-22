import { connect } from 'react-redux';
import MeetupShow from './meetup';
import { fetchMeetup, editMeetup, cancelMeetup, joinMeetup, joinWaitlist, leaveMeetup } from '../../actions/meetup_actions';
import { fetchHost } from '../../actions/user_actions';
import { fetchUser } from '../../actions/session_actions';
// import { createGuest } from '../../actions/guest_actions';
import { clearMessage } from '../../actions/message_actions';

const mapSTP = (state, ownprops) => {
  console.log(state.meetups[ownprops.match.params.meetupId]);
  return({
    meetup: state.meetups[ownprops.match.params.meetupId],
    session: state.session,
    meetupId: ownprops.match.params.meetupId,
    users: state.users
    // currentUser: state.users[state.session.id],
    // host: state.users[state.meetups[ownprops.match.params.meetupId].host_id]
})}

const mapDTP = (dispatch) => ({
  // Fetch, join, leave, edit, cancel
    fetchMeetup: (meetupId) => dispatch(fetchMeetup(meetupId)),
  // fetch User (hosts and guests)
    fetchHost: (hostId) => dispatch(fetchHost(hostId)),
    // fetchGuests: (guestIds) => dispatch(fetchGuests(guestIds)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),

  // remove guest/Edit/Cancel meetup (hosts)
    editMeetup: (meetupId) => dispatch(editMeetup(meetupId)),
    cancelMeetup: (meetupId) => dispatch(cancelMeetup(meetupId)),
  // join/waitlist/leave(guests) meetup
    joinMeetup: (meetupId) => dispatch(joinMeetup(meetupId)),
    joinWaitlist: (meetupId) => dispatch(joinWaitlist(meetupId)),
    leaveMeetup: (meetupId) => dispatch(leaveMeetup(meetupId)),

  // Clear message board on the top
    clearMessage: () => dispatch(clearMessage())
})

export default connect(mapSTP, mapDTP)(MeetupShow);