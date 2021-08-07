import { connect } from 'react-redux';
import { fetchIndexMeetups } from '../../actions/meetup_actions';
import { fetchUser } from '../../actions/session_actions';
import AllMeetups from './all_meetups';
import { clearMessage } from '../../actions/message_actions';

const mapSTP = (state) => {
    // console.log(state.meetups);
    return({
    meetups: state.meetups,
    currentUserId: state.session.id,
    // currentUserCity: state.users[state.session.id].home_city
    // currentUser: state.users[state.session.id]
    currentUser: state.users[state.session.id]
})}

const mapDTP = dispatch => ({
    fetchMeetups: user => dispatch(fetchIndexMeetups(user)),
    fetchUser: id => dispatch(fetchUser(id)),
    clearMessage: () => dispatch(clearMessage())
})

export default connect(mapSTP, mapDTP)(AllMeetups);