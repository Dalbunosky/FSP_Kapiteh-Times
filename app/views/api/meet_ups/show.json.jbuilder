# Details to show at each meetup's individual page

json.partial! 'api/meetups/show', meetup: @meetup
# json.partial! 'api/meetups/meetup', meetup: @meetup
json.photoUrl url_for(@meetup.photo)
json.summary @meetup.summary
json.story @meetup.story
json.discussion @meetup.discussion
json.quote @meetup.quote
json.username @meetup.host.username
json.name @meetup.name
json.guests @meetup.guests