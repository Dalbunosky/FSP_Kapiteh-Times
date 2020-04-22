export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users', 
    data: { user }
  })
);

export const editUser = user => {
  
  console.log(user);
  return(
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`, 
    data: { user }
  })
);}

export const closeAcct = userid => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${userid}`
  })
);

export const signin = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const signout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

