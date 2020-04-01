import { connect } from 'react-redux';

import Messages from './messages';

const mapSTP = (state) => {
    return {
        state
    };
};

const mapDTP = dispatch => {
    return {
    };
};

export default connect(mapSTP, mapDTP)(Messages);
