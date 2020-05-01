export const fetchMeetups = (foh, id) => (
  $.ajax({
    method: 'GET',
    url: '/api/meetups',
    // foh: foh,
    // user: id,
    // keyword: [foh, id]
    user_id: foh
    // data // data should all meetups
  })
);

export const fetchMeetup = id => (
  $.ajax({
    method: 'GET',
    url: `/api/meetups/${id}`
  })
);


// Joining and leaving meetup
export const joinMeetup = meetupId => ( 
  $.ajax({
    method: 'POST',
    url: `/api/meetups/${meetupId}/join`,
    id: meetupId
  })
);

export const leaveMeetup = meetupId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/meetups/${meetupId}/leave`
  })
);


// Host operation: Create, Edit, Cancel Meetup
export const createMeetup = meetup => {
  console.log(meetup)
  return( //For creating new meetups
  $.ajax({
    method: 'POST',
    url: '/api/meetups',
    data: {meetup},
    // contentType: false, //Shit, what is this?
    // processData: false  //Shit, what is this?
  })
)}

export const editMeetup = meetup => (
  $.ajax({
    method: 'PATCH',
    url: `/api/meetups/${meetup.id}`, 
    data: { meetup }
  })
);

export const cancelMeetup = meetupId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/meetups/${meetupId}`
  })
);

//Leave for later
// export const createReview = review => ( 
//   $.ajax({
//     method: 'POST',
//     url: 'api/reviews',
//     data: { review }
//   })
// );