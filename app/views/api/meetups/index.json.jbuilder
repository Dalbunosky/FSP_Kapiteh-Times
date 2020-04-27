# Details to show at meetup index page
json.array!(@meetups) do |meetup|
    json.partial! 'api/meetups/meetup', meetup: meetup
    json.hostName meetup.host.name
    # json.hostId meetup.host.id
    json.timeSortValue (meetup.starttime[1]*5 + meetup.starttime[2]*4 + meetup.starttime[3]*3 + meetup.starttime[4]*2 + meetup.starttime[5])
    #  json.photoUrl url_for(meetup.photo)
      
end 

# @meetups.each do |meetup|
#   json.set! meetup.id do
#     json.partial! 'meetup', meetup: meetup
#   end
# end
  