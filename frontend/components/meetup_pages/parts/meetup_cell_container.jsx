import { connect } from 'react-redux';
import SingleMeetup from './meetup_cell';
import { fetchMeetup, joinMeetup, leaveMeetup, cancelMeetup } from '../../../actions/meetup_actions';
import { withRouter } from 'react-router-dom';

const mapSTP = (state, ownProps) => {
    // console.log(state);
    // console.log(ownProps.history);
    return {    // That's it? For joining?
        state,
        history: ownProps.history
        // currentUser: state.session.currentUser
    };
};

const mapDTP = dispatch => (
    { // fetch, join, cancel meetup
        fetchMeetup: (meetupId) => dispatch(fetchMeetup(meetupId)),
        joinMeetup: (meetupId) => dispatch(joinMeetup(meetupId)),
        leaveMeetup: (meetupId) => dispatch(leaveMeetup(meetupId)),
        cancelMeetup: (meetupId) => dispatch(cancelMeetup(meetupId))
    }
)


export default withRouter(connect(mapSTP, mapDTP)(SingleMeetup));
// export default connect(mapSTP, mapDTP)(SingleMeetup);
