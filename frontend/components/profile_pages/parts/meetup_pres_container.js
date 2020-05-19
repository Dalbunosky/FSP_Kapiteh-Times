import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import SingleMeetup from './meetup_cell';
import { fetchProfileMeetups, joinMeetup, leaveMeetup, editMeetup, cancelMeetup } from '../../../actions/meetup_actions';
import { fetchHost, fetchGuests } from '../../../actions/user_actions';
import MeetupCell from './meetup_pres';

const mapSTP = (state) => {
    // console.log(state);
    return {    // That's it? For joining?
        users: state.users,
        session: state.session.id
    };
};

const mapDTP = dispatch => (
    { 
    // fetch User (hosts and guests)
        fetchMeetups: id => dispatch(fetchProfileMeetups(id)),  // Used for cancel after action
        fetchHost: (userId) => dispatch(fetchHost(userId)),
        // fetchGuests: (userId) => dispatch(fetchGuests(userId)),
        // fetchUser: (userId) => dispatch(fetchUser(userId)),
    // remove guest/Edit/Cancel meetup (hosts)
        editMeetup: (meetup) => dispatch(editMeetup(meetup)),
        cancelMeetup: (meetupId) => dispatch(cancelMeetup(meetupId)),
    // join/leave(guests) meetup
        // attendMeetup: (meetupId) => dispatch(joinMeetup(meetupId)),
        leaveMeetup: (meetupId) => dispatch(leaveMeetup(meetupId)),
        // requestSingleMeetup: (meetupId) => dispatch(requestSingleMeetup(meetupId))
    }
)


export default withRouter(connect(mapSTP, mapDTP)(MeetupCell));
