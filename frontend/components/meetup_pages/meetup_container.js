import { connect } from 'react-redux';
import MeetupShow from './meetup';
import { fetchMeetup } from '../../actions/meetup_actions';
// import { createGuest } from '../../actions/guest_actions';

const mapSTP = (state, ownprops) => {
  console.log(state);
  return({
    meetup: state.entities.meetups[ownprops.match.params.id],
    // What does user do?
    user: state.entities.users[state.session.id]
})}

const mapDTP = (dispatch) => ({
  fetchMeetup: id => dispatch(fetchMeetup(id)),
  createGuest: meetupId => dispatch(createGuest(meetupId))
})

// export default connect(mapSTP, mapDTP)(MeetupShow);