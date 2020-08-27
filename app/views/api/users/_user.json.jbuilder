json.extract! user, :id, :name, :email, :phone, :home_city, :story, :email_subscription, :host_status, :img_url
json.image_url url_for(user.profile_pic)