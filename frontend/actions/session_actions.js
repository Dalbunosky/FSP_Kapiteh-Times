import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const CLOSE_USER_ACCOUNT = "CLOSE_USER_ACCOUNT";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER,
});

export const receiveUserErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
})

export const closeUserAccount = () => ({
  type: CLOSE_USER_ACCOUNT,
});




// grab current user
export const getUser = () => dispatch => (
  ApiUtil.receiveUser()
    .then(user => dispatch(receiveCurrentUser(user)))
)

// export const removeGuest = id => dispatch => (
//   ApiUtil.deleteGuest(id)
//     .then((guest) => dispatch(deleteGuest(guest)))
// )

// export const removeMeetup = id => dispatch => (
//   ApiUtil.deleteMeetup(id)
//     .then((meetup) => dispatch(deleteMeetup(meetup)))
// )


// Sign Up, Sign In, Sign out
export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);

export const signin = user => dispatch => (
  APIUtil.signin(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);

export const signout = () => dispatch => (
  APIUtil.signout().then(user => (
    dispatch(signoutCurrentUser())
  ))
);


// Edit Profile, Close Account
export const editUser = user => dispatch => (
  APIUtil.editUser(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);

export const closeAcct = () => dispatch => (
  APIUtil.closeAcct().then(user => (
    dispatch(closeUserAccount())
  ))
);
