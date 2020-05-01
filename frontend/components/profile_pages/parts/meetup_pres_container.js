import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import SingleMeetup from './meetup_cell';
import { fetchMeetup, joinMeetup, leaveMeetup, editMeetup, cancelMeetup } from '../../../actions/meetup_actions';
import { fetchUser, fetchHost, fetchGuests } from '../../../actions/user_actions';
import MeetupCell from './meetup_pres';

const mapSTP = state => {
    return {    // That's it? For joining?
        users: state.users
    };
};

const mapDTP = dispatch => (
    { 
    // fetch User (hosts and guests)
        fetchHost: (userId) => dispatch(fetchHost(userId)),
        fetchGuests: (userId) => dispatch(fetchGuests(userId)),
        // fetchUser: (userId) => dispatch(fetchUser(userId)),
    // remove guest/Edit/Cancel meetup (hosts)
        editMeetup: (meetup) => dispatch(editMeetup(meetup)),
        cancelMeetup: (meetupId) => dispatch(cancelMeetup(meetupId)),
    // join/leave(guests) meetup
        // attendMeetup: (meetupId) => dispatch(joinMeetup(meetupId)),
        unattendMeetup: (meetupId) => dispatch(leaveMeetup(meetupId)),
        // requestSingleMeetup: (meetupId) => dispatch(requestSingleMeetup(meetupId))
    }
)


export default withRouter(connect(mapSTP, mapDTP)(MeetupCell));
