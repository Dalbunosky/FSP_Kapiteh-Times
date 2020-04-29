import * as APIUtil from '../util/user_api_util';

export const RECEIVE_HOST = 'RECEIVE_HOST';
export const RECEIVE_GUESTS = 'RECEIVE_GUESTS';
// export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
// export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
// export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
// export const CLOSE_USER_ACCOUNT = "CLOSE_USER_ACCOUNT";


export const receiveHost = host => {
  return({
  type: RECEIVE_HOST,
  host
});}

export const receiveGuests = guests => {
  return({
  type: RECEIVE_GUESTS,
  guests
});}

// export const receiveUserErrors = errors => ({
//   type: RECEIVE_SESSION_ERRORS,
//   errors
// });

// export const clearSessionErrors = () => ({
//   type: CLEAR_SESSION_ERRORS,
// })



// grab host
export const fetchHost = userid => dispatch => (
  APIUtil.fetchUser(userid)
    .then(user => dispatch(receiveHost(user)))
)

// grab guests
export const fetchGuests = guestArray => dispatch => (
  APIUtil.fetchGuests(guestArray)
    .then(guests => dispatch(receiveGuests(guests)))
)

// export const removeGuest = id => dispatch => (
//   ApiUtil.deleteGuest(id)
//     .then((guest) => dispatch(deleteGuest(guest)))
// )

// export const removeMeetup = id => dispatch => (
//   ApiUtil.deleteMeetup(id)
//     .then((meetup) => dispatch(deleteMeetup(meetup)))
// )
