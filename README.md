# [Kapiteh Times](https://kapiteh-times.herokuapp.com/#/)

A clone web application inspired by the website Tea With Strangers, using React/Redux for front end of the app, Ruby on Rails for the backend, with a PostgreSQL database. The Application allows users to create, edit, and/or attend future meetups, as well as keep track of past meetups.

# Features

### Single-Page App
 
Kapiteh Times is a single-page app; all contents are designed to be delivered on one static page, who listens to a set of APIs and renders content based on the responses for items such as Session, meetups, corresponding users, and any errors that come up. Sensitive information are however kept out of the frontend of the app.

### 

### User login system

This web app has a user login system as only registered users can join and attend meetups due to accounting and safety purposes. With some information as well as username and password, the user can create an account from which to login and join and/or manage meetups.

### Hosting

Hosts are members who are allowed to create and host meetups. To become a host, there are additional requirements compared to being a regular user. Hosts need to have full contact details, a picture of themselves, as well as a story. Host approvals are currently automatic so long you have the appropriate details. This would need to be changed if the application was to become operational.

### Meetup information and options

Each meetup will have the venue name, address, a picture of the host, as well as the appropriate information depending on the user. The user will also have different options pertaining to a meetup depending on whether said user is logged in, the host, the attendee, and whether the meetup is full.

### Profile feature

Each user will have access to a profile page where said user's upcoming meetups are listed. To see previous meetups, there is a history page, and to change any personal information as shown on the left of the profile page, there is a page to edit said information.

### Search by metro area

On the meetups page, there is a search bar that allows users to search for nearby meetups by name of metro area. Metro area is the metropolitan region you are in, such as Los Angeles, vs city, which could be Culver City. By using metro areas, you would be able to find more available meetups as cities in a regions don't act independently and are very close by.

### Event Messages

A message bar in the header will extend and display any relevant messages such as recognition of logging in or password change, then disappear.

### Password change

Users have the ability to change their profile details, including their account's password.

# Future Features

- Removal of profile pictures for regular users
- Review of host
- Wait List
- Google Map API for meetups
- Meetup duration/end time, crash monitoring
- User preferences for things like 12/24 or mm/dd/yyyy display
- Email (If this can be done at all)
- Messaging system so that guests and hosts can contact each other