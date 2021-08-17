import * as APIUtil from '../util/meetup_api_util';

import {fetchHost, receiveHost} from './user_actions';

export const RECEIVE_MEETUPS = 'RECEIVE_MEETUPS';
export const RECEIVE_MEETUP = 'RECEIVE_MEETUP';
export const MEETUP_CREATED = 'MEETUP_CREATED';
export const MEETUP_UPDATED = 'MEETUP_UPDATED';
export const MEETUP_HAS_ERRORS = "MEETUP_HAS_ERRORS";
export const CLEAR_MEETUP_ERRORS = 'CLEAR_MEETUP_ERRORS';
export const MEETUP_CANCELLED = 'MEETUP_CANCELLED';

// export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveMeetups = meetups => {
  return({
  type: RECEIVE_MEETUPS,
  meetups,
});}

export const receiveMeetup = meetup => ({
  type: RECEIVE_MEETUP,
  meetup
});

export const meetupCreated = meetup => ({
  type: MEETUP_CREATED,
  meetup
});

export const meetupUpdated = meetup => ({
  type: MEETUP_UPDATED,
  meetup
});

// export const receiveMeetup = ({ meetup, reviews, hosts }) => ({
//   type: RECEIVE_MEETUP,
//   meetup,
//   reviews,
//   hosts,
// });

export const receiveMeetupErrors = errors => ({
  type: MEETUP_HAS_ERRORS,
  errors
});

export const clearMeetupErrors = () => ({
  type: CLEAR_MEETUP_ERRORS,
})

export const meetupCanceled = () => ({
  type: MEETUP_CANCELLED,
});

// export const receiveReview = ({ review, average_rating, host }) => ({
//   type: RECEIVE_REVIEW,
//   review,
//   average_rating,
//   host
// });



// Thunk actions
//Fetch meetups for meetup index
export const fetchIndexMeetups = () => dispatch => (
  APIUtil.fetchIndexMeetups().then(meetups => (
    dispatch(receiveMeetups(meetups))
  ))
);

//Fetch meetups for history page
export const fetchHistoryMeetups = (userId) => dispatch => (
  APIUtil.fetchHistoryMeetups(userId).then(meetups => (
    dispatch(receiveMeetups(meetups))
  ))
);

//Fetch meetups for profile page
export const fetchProfileMeetups = (userId) => dispatch => (
  APIUtil.fetchProfileMeetups(userId).then(meetups => (
    dispatch(receiveMeetups(meetups))
  ))
);

//Fetch meetups host is hosting
export const fetchHostMeetups = (userId) => dispatch => (
  APIUtil.fetchHostMeetups(userId).then(meetups => (
    dispatch(receiveMeetups(meetups))
  ))
);

// Fetch meetup in question, for show
export const fetchMeetup = id => dispatch => (
  APIUtil.fetchMeetup(id).then(meetup => (
    dispatch(receiveMeetup(meetup))
  ))
);


// Creates meetup
export const createMeetup = meetup => dispatch => (
  APIUtil.createMeetup(meetup).then(meetup => (
    dispatch(meetupCreated(meetup))
  ), err => (
    dispatch(receiveMeetupErrors(err.responseJSON))
  ))
);

// Edits meetup
export const editMeetup = meetup => dispatch => (
  APIUtil.editMeetup(meetup).then(meetup => (
    dispatch(meetupUpdated(meetup))
  ), err => (
    dispatch(receiveMeetupErrors(err.responseJSON))
  ))
);

// Cancels meetup
export const cancelMeetup = meetupId => dispatch => {
  return(
  APIUtil.cancelMeetup(meetupId).then(() => (
    dispatch(meetupCanceled())
  ))
)}

// export const closeAcct = () => dispatch => (
//   SessAPIUtil.closeAcct().then(user => (
//     dispatch(closeUserAccount())
//   ))
// );

// Join meetup
export const joinMeetup = meetupId => dispatch => (
  APIUtil.joinMeetup(meetupId).then(meetup => (
    dispatch(receiveMeetup(meetup))
  ), err => (
    dispatch(receiveMeetupErrors(err.responseJSON))
  ))
);

// Join waitlist
export const joinWaitlist = meetupId => dispatch => (
  APIUtil.joinWaitlist(meetupId).then(meetup => (
    dispatch(receiveMeetup(meetup))
  ), err => (
    dispatch(receiveMeetupErrors(err.responseJSON))
  ))
);

// Leave meetup
export const leaveMeetup = meetupId => dispatch => {
  return(
  APIUtil.leaveMeetup(meetupId).then(meetup => (
    dispatch(receiveMeetup(meetup))
  ), err => (
    dispatch(receiveMeetupErrors(err.responseJSON))
  ))
);}


// export const createReview = review => dispatch => (
//   APIUtil.createReview(review).then(review => (
//     dispatch(receiveReview(review))
//   ))
// );