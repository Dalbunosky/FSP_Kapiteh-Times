import * as APIUtil from '../util/meetup_api_util';

export const RECEIVE_MEETUPS = 'RECEIVE_MEETUPS';
export const RECEIVE_MEETUP = 'RECEIVE_MEETUP';
export const MEETUP_HAS_ERRORS = "MEETUP_HAS_ERRORS";
export const CLEAR_MEETUP_ERRORS = 'CLEAR_MEETUP_ERRORS';
export const CANCEL_MEETUP = 'CANCEL_MEETUP';

// export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveMeetups = meetups => ({
  type: RECEIVE_MEETUPS,
  meetups,
});

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

export const fetchMeetups = filters => dispatch => (
  APIUtil.fetchMeetups(filters).then(meetups => (
    dispatch(receiveMeetups(meetups))
  ))
);

export const fetchMeetup = id => dispatch => (
  APIUtil.fetchMeetup(id).then(payload => (
    dispatch(receiveMeetup(payload))
  ))
);

export const createMeetup = meetup => dispatch => (
  APIUtil.createMeetup(meetup).then(meetup => (
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