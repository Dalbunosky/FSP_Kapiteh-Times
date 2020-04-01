import * as guestApiUtil from '../util/guest_api_util';

export const RECEIVE_GUEST = "RECEIVE_GUEST"

const receiveGuest = guest => ({
  type: RECEIVE_GUEST,
  guest
})

export const createGuest = guest => dispatch => (
  guestApiUtil.createGuest(guest)
    .then(guest => dispatch(receiveGuest(guest)))
)