# Details to show at meetup index page
json.array!(@meetups) do |meetup|
    json.partial! 'api/meetups/meetup', meetup: meetup
       json.name meetup.host.name
       json.host meetup.host.id
       json.photoUrl url_for(meetup.photo)
end 

