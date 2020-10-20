import { connect } from 'react-redux';
import Message from './message';
import { clearMessage } from "../../actions/message_actions";

const mapSTP = (state) => {
    return {
        message: state.message
    };
};

const mapDTP = dispatch => {
    return {
        clearMessage: () => dispatch(clearMessage())
    };
};

export default connect(mapSTP)(Message);
