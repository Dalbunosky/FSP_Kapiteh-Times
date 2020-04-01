import { combineReducers } from 'redux';

// import reviews from './reviews_reducer';
import meetups from './main_content/meetups_reducer';
import users from './main_content/users_reducer';
// import ui from './ui_reducer';
// import filters from './filters_reducer';

const contentReducer = combineReducers({
    meetups,
    users
});

export default contentReducer;
