import * as SessAPIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const CLOSE_USER_ACCOUNT = "CLOSE_USER_ACCOUNT";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";


export const receiveCurrentUser = currentUser => {
  return({
  type: RECEIVE_CURRENT_USER,
  currentUser
});}

export const signoutCurrentUser = (message) => {
  return({
  type: SIGNOUT_CURRENT_USER,
});}

export const passwordChanged = msg => ({
  type: CHANGE_PASSWORD,
  msg
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
export const fetchUser = id => dispatch => (
  UserAPIUtil.fetchUser(id)
    .then(user => dispatch(receiveCurrentUser(user)))
)

// Sign Up, Sign In, Sign out
export const signup = user => dispatch => (
  SessAPIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);

export const signin = user => dispatch => (
  SessAPIUtil.signin(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);

export const signout = () => dispatch => (
  SessAPIUtil.signout().then(user => (
    dispatch(signoutCurrentUser(user))
  ))
);

// Edit Profile, Close Account
export const editUser = user => dispatch => (
  SessAPIUtil.editUser(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);

// Change Account Password
export const changePassword = passwords => dispatch => (
  SessAPIUtil.changePassword(passwords).then(msg => (
    dispatch(passwordChanged(msg))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);

// // Change Account Password
// export const changePassword = passwords => dispatch => (
//   SessAPIUtil.changePassword(passwords).then(success => (
//     dispatch(receiveUserErrors(success))
//   ), err => (
//     dispatch(receiveUserErrors(err.responseJSON))
//   ))
// );

export const closeAcct = () => dispatch => (
  SessAPIUtil.closeAcct().then(user => (
    dispatch(closeUserAccount())
  ))
);
