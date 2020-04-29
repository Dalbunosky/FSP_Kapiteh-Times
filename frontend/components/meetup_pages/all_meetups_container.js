import { connect } from 'react-redux';
import { fetchMeetups } from '../../actions/meetup_actions';
import AllMeetups from './all_meetups';

const mapSTP = (state) => {
    console.log(state)
    return({
    meetups: state.meetups,
    currentUser: state.session,
    // currentUserCity: state.users[state.session.id].home_city
})}

const mapDTP = dispatch => ({
    getMeetups: user => dispatch(fetchMeetups(user))
})

export default connect(mapSTP, mapDTP)(AllMeetups);