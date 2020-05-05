json.extract! meetup, :id, :location, :starttime, :metro_area, :capacity, :host_id, :topic, :guests, :guest_ids


# json.extract! meetup, :id, :date, :address, :host_id, :city_id, :guest_ids
# json.host_name meetup.host.username
# json.host_thumb asset_path(meetup.host.image.url(:thumb))