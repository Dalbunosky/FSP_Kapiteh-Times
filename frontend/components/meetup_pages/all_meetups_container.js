import { connect } from 'react-redux';
import { fetchIndexMeetups } from '../../actions/meetup_actions';
import { fetchUser } from '../../actions/session_actions';
import AllMeetups from './all_meetups';

const mapSTP = (state) => {
    // console.log("STAAAAAAAAAAAAAAAAATE");
    // console.log(state);
    return({
    meetups: state.meetups,
    // signedIn: state.session.id,
    // currentUserCity: state.users[state.session.id].home_city
    // currentUser: state.users[state.session.id]
    currentUser: state.users[state.session.id]
})}

const mapDTP = dispatch => ({
    fetchMeetups: user => dispatch(fetchIndexMeetups(user)),
    fetchUser: id => dispatch(fetchUser(id))
})

export default connect(mapSTP, mapDTP)(AllMeetups);