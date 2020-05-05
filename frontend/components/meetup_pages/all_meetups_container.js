import { connect } from 'react-redux';
import { fetchIndexMeetups } from '../../actions/meetup_actions';
import AllMeetups from './all_meetups';

const mapSTP = (state) => {
    console.log(state);
    return({
    meetups: state.meetups,
    currentUser: state.session,
    // currentUserCity: state.users[state.session.id].home_city
})}

const mapDTP = dispatch => ({
    fetchMeetups: user => dispatch(fetchIndexMeetups(user))
})

export default connect(mapSTP, mapDTP)(AllMeetups);