import { combineReducers } from 'redux';

// import mainContent from './content_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import users from './main_content/users_reducer';
import meetups from './main_content/meetups_reducer';
// import reviews from './reviews_reducer';
// import ui from './ui_reducer';
// import filters from './filters_reducer';

const rootReducer = combineReducers({
  // mainContent,
  meetups,
  users,
  session,
  errors
});

export default rootReducer;
