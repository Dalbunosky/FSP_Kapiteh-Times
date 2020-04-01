import { connect } from 'react-redux';

import { signout } from '../../actions/session_actions';
import Greeting from './greeting';

// const mapSTP = ({ session, mainContent: { users } }) => {
const mapSTP = ({ session, users }) => {

  return {
    currentUser: users[session.id]
  };
};

const mapDTP = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapSTP,
  mapDTP
)(Greeting);
