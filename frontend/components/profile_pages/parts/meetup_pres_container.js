import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import SingleMeetup from './meetup_cell';
import { joinMeetup, leaveMeetup, fetchMeetup } from '../../../actions/meetup_actions';
import { fetchUser } from '../../../actions/user_actions';
import MeetupCell from './meetup_pres';

const mapSTP = state => {
    console.log(state)
    return {    // That's it? For joining?
        state
        // currentUser: state.session.currentUser
    };
};

const mapDTP = dispatch => (
    { // fetch User (hosts and guests), remove guest/Edit/Cancel meetup (hosts), join/leave(guests) meetup
        fetchUser: (userId) => dispatch(fetchUser(userId)),

        editMeetup: (meetup) => dispatch(editMeetup(meetup)),
        cancelMeetup: (meetupId) => dispatch(cancelMeetup(meetupId)),

        attendMeetup: (meetupId) => dispatch(joinMeetup(meetupId)),
        unattendMeetup: (meetupId) => dispatch(leaveMeetup(meetupId)),
        // requestSingleMeetup: (meetupId) => dispatch(requestSingleMeetup(meetupId))
    }
)


export default withRouter(connect(mapSTP, mapDTP)(MeetupCell));
