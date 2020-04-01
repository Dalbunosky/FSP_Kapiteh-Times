# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

# User.destroy_all
# Meetup.destroy_all
# Ticket.destroy_all

# demo_user = User.create(username: "User John", email: "DemoUser@fake.com", password: "11111111", home_city: "Sunnyvale")
# demo_host = User.create(username: "Host Jane", email: "DemoHost@fake.com", password: "`1234567", home_city: "Pasadena", phone: 6266543210, story: "I'm a host. Other than that, I don't know. Ask Chi, he created me.")
# demo_admin = User.create(username: "Admin Jack", email: "DemoAdmin@fake.com", password: "12345678", home_city: "Flushing", phone: 3237828258, story: "I'm here to show you what admins would be able to do, I can play God with everything here, assigning hosts at my mercy... Assuming Chi has built the right pages.")
# admin = User.create(username: "Captain Obvious", email: "Admin@fake.com", password: "````````", home_city: "Mammoth Lakes", phone: 7607893358, story: "I'm the actual Admin.")

# meet1 = Meetup.new(
    # location: [null, null, "DaeHo", "1620 Post St", "San Francisco", "CA", "94115", "USA"], 
    # capacity: 3, 
    # host_id: demo_host.id, 
    # time: [2020, 5, 31, 10, 30],
    # topic: "Who's hungry?", 
#)

# meet2 = Meetup.new(
    # location: [null, null, "Vons", "481 Old Mammoth Road", "Mammoth Lakes", "CA", "93546", "USA"], 
    # capacity: 3, 
    # lat: 40.747149, lng: -73.989218, 
    # host_id: admin.id, 
    # time: [2020, 5, 31, 10, 30],
    # topic: "It's time for you to take a hike!", 
#)

# file1 = open('https://frapwithfriends-seeds.s3.amazonaws.com/kiki.png')
# file2 = open('https://frapwithfriends-seeds.s3.amazonaws.com/totoro.jpg')
# file3 = open('https://frapwithfriends-seeds.s3.amazonaws.com/truehowl.jpeg')
# file4 = open('https://frapwithfriends-seeds.s3.amazonaws.com/mononoke.jpg')
# file5 = open('https://frapwithfriends-seeds.s3.amazonaws.com/jojo.png')
# file6 = open('https://frapwithfriends-seeds.s3.amazonaws.com/dio.png')

# e1.photo.attach(io: file1, filename: 'kiki.png')
# e4.photo.attach(io: file3, filename: 'truehowl.jpeg')
# e5.photo.attach(io: file5, filename: 'jojo.png')
# e6.photo.attach(io: file6, filename: 'dio.png')
# e7.photo.attach(io: file4, filename: 'mononoke.jpg')
# e8.photo.attach(io: file2, filename: 'totoro.jpg')


# e1.save!
# e4.save!
# e5.save!
# e6.save!
# e7.save!
# e8.save!

# a1 = Attendee.create!(user_id: u3.id, event_id: e4.id)
# a2 = Attendee.create!(user_id: u2.id, event_id: e1.id)
# a3 = Attendee.create!(user_id: u1.id, event_id: e4.id)
# a4 = Attendee.create!(user_id: u4.id, event_id: e5.id)
