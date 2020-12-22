json.extract! meetup, :id, :location, :starttime, :metro_area, :capacity, :host_id, :topic, :guests, :waitlist
json.hostName meetup.host.name

active = []
waitlist = []
meetup.tickets.map do |ticket|
    if ticket.waitlisted
        waitlist.push(ticket.user_id)
    else
        active.push(ticket.user_id)
    end
end
json.active_guests active
json.waitlisted_guests waitlist

if meetup.host.profile_pic.attached?
    json.hostImage url_for(meetup.host.profile_pic)
end

# json.extract! meetup, :id, :date, :address, :host_id, :city_id, :guest_ids
# json.host_name meetup.host.username
# json.host_thumb asset_path(meetup.host.image.url(:thumb))