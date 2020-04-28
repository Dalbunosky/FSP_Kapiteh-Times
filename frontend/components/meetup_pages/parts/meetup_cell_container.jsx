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
        attendMeetup: (meetupId) => dispatch(attendMeetup(meetupId)),
        unattendMeetup: (meetupId) => dispatch(unattendMeetup(meetupId)),
        requestSingleMeetup: (meetupId) => dispatch(requestSingleMeetup(meetupId))
    }
)


export default withRouter(connect(mapSTP, mapDTP)(SingleMeetup));
