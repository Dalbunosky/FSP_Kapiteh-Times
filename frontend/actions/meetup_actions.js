import * as APIUtil from '../util/meetup_api_util';

export const RECEIVE_MEETUPS = 'RECEIVE_MEETUPS';
export const RECEIVE_MEETUP = 'RECEIVE_MEETUP';
export const MEETUP_HAS_ERRORS = "MEETUP_HAS_ERRORS";
export const CLEAR_MEETUP_ERRORS = 'CLEAR_MEETUP_ERRORS';
export const CANCEL_MEETUP = 'CANCEL_MEETUP';

// export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveMeetups = meetups => {
  console.log(meetups)
  return({
  type: RECEIVE_MEETUPS,
  meetups,
});}

export const receiveMeetup = meetup => ({
  type: RECEIVE_MEETUP,
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

export const cancelMeetup = () => ({
  type: CANCEL_MEETUP,
});

// export const receiveReview = ({ review, average_rating, host }) => ({
//   type: RECEIVE_REVIEW,
//   review,
//   average_rating,
//   host
// });



// Thunk actions
// Fetch all meetups, for index, 
// MAY SPLIT IN TWO FOR PROFILE, MEETUPS PAGE
export const fetchMeetups = keyword => dispatch => (
  APIUtil.fetchMeetups(keyword).then(meetups => (
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
    dispatch(receiveMeetup(meetup))
  ), err => (
    dispatch(receiveMeetupErrors(err.responseJSON))
  ))
);

// Edits meetup
export const editMeetup = meetup => dispatch => (
  APIUtil.editMeetup(meetup).then(meetup => (
    dispatch(receiveMeetup(meetup))
  ), err => (
    dispatch(receiveMeetupErrors(err.responseJSON))
  ))
);

// Cancels meetup
export const cancelMeetup = meetup => dispatch => (
  APIUtil.cancelMeetup(meetup).then(meetup => (
    dispatch(cancelMeetup(meetup))
  ))
);

// Join meetup
export const joinMeetup = meetup => dispatch => (
  APIUtil.joinMeetup(meetup).then(meetup => (
    dispatch(receiveMeetup(meetup))
  ), err => (
    dispatch(receiveMeetupErrors(err.responseJSON))
  ))
);

// Leave meetup
export const leaveMeetup = meetup => dispatch => (
  APIUtil.leaveMeetup(meetup).then(meetup => (
    dispatch(receiveMeetup(meetup))
  ), err => (
    dispatch(receiveMeetupErrors(err.responseJSON))
  ))
);


// export const createReview = review => dispatch => (
//   APIUtil.createReview(review).then(review => (
//     dispatch(receiveReview(review))
//   ))
// );