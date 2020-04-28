import * as APIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const CLOSE_USER_ACCOUNT = "CLOSE_USER_ACCOUNT";


export const receiveUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveUserErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
})



// grab current user
export const fetchUser = userid => dispatch => (
  APIUtil.fetchUser(userid)
    .then(user => dispatch(receiveUser(user)))
)

// export const removeGuest = id => dispatch => (
//   ApiUtil.deleteGuest(id)
//     .then((guest) => dispatch(deleteGuest(guest)))
// )

// export const removeMeetup = id => dispatch => (
//   ApiUtil.deleteMeetup(id)
//     .then((meetup) => dispatch(deleteMeetup(meetup)))
// )
