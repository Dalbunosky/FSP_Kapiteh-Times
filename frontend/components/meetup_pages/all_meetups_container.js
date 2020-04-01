import { connect } from 'react-redux';
import { receiveMeetups } from '../../actions/meetup_actions';
import AllMeetups from './all_meetups';

const mapSTP = state => ({
    meetups: state.meetups
})

const mapDTP = dispatch => ({
    receiveMeetups: () => dispatch(fetchMeetups())
})

export default connect(mapSTP, mapDTP)(AllMeetups);