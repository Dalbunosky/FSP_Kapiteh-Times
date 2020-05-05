import { connect } from 'react-redux';
import SingleMeetup from './meetup_cell';
import { attendMeetup, unattendMeetup, requestSingleMeetup } from '../../../actions/meetup_actions';
import { withRouter } from 'react-router-dom';

const mapSTP = state => {
    console.log(state)
    return {    // That's it? For joining?
        state
        // currentUser: state.session.currentUser
    };
};

const mapDTP = dispatch => (
    { // fetch, join, cancel meetup
        joinMeetup: (meetupId) => dispatch(joinMeetup(meetupId)),
        leaveMeetup: (meetupId) => dispatch(leaveMeetup(meetupId)),
        fetchMeetup: (meetupId) => dispatch(fetchMeetup(meetupId))
    }
)


export default withRouter(connect(mapSTP, mapDTP)(SingleMeetup));
