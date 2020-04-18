export const fetchMeetups = data => (
  $.ajax({
    method: 'GET',
    url: '/api/meetups',
    data // data should all meetups
  })
);

export const fetchMeetup = id => (
  $.ajax({
    method: 'GET',
    url: `/api/meetups/${id}`
  })
);

export const createMeetup = newMeetup => {
  console.log("Create MeetUp Util")
  return( //For creating new meetups
  $.ajax({
    method: 'POST',
    url: '/api/meetups',
    data: {newMeetup},
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