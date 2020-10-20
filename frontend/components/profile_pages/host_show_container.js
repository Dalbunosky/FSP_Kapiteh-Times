import { connect } from 'react-redux';
import React from 'react';

import { fetchHostMeetups } from '../../actions/meetup_actions';
import { fetchHost } from '../../actions/user_actions';
import { clearMessage } from '../../actions/message_actions';
import HostShow from './host_show';


const mapSTP = (state, ownProps) => {
    // console.log(state);
    return {
        // currentUser: state.users[state.session.id],
        hostId: ownProps.match.params.hostId,
        host: state.users[ownProps.match.params.hostId],
        meetups: state.meetups
    };
};

const mapDTP = dispatch => {
    return {
        fetchHost: hostId => dispatch(fetchHost(hostId)),
        fetchMeetups: hostId => dispatch(fetchHostMeetups(hostId)),
        clearMessage: () => dispatch(clearMessage())
    };
};

export default connect(mapSTP, mapDTP)(HostShow);
