json.extract! user, :id, :name, :email, :phone, :home_city, :story, :email_subscription, :host_status
if user.profile_pic.attached?
    json.image_url url_for(user.profile_pic)
end