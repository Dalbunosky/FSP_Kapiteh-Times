# Details to show at each meetup's individual page
json.partial! '/api/meetups/meetup', meetup: @meetup

# # json.partial! 'api/meetups/meetup', meetup: @meetup
# # json.photoUrl url_for(@meetup.photo)
# json.topic @meetup.topic
# json.guests @meetup.guests
# json.host_name @meetup.host.name
# json.location @meetup.location
# json.starttime @meetup.starttime
# json.capacity @meetup.capacity

# json.partial! "api/meetups/meetup", meetup: @meetup