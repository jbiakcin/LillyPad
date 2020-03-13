# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Spot.destroy_all
Booking.destroy_all

demo_user= User.create!({first_name: 'Demo', last_name: 'User', email: 'abc@abc.com', password: 'hunter12', gender: 'Female', city: 'San Francisco', age: 23})

jennie = User.create!({first_name: 'Jennie', last_name: 'Richardson', email: 'jrichardson@fakeemail.com', password: 12345678, gender: 'Female', city: 'Fresno', age: 21})
tom = User.create!({first_name: 'Tom', last_name: 'Cruise', email: 'tcruise@fakeemail.com', password: 12345678, gender: 'Male', city: 'New York', age: 50})
james = User.create!({first_name: 'James', last_name: 'Bond', email: 'jbond@fakeemail.com', password: 12345678, gender: 'Male', city: 'Las Vegas', age: 45})
jennifer = User.create!({first_name: 'Jennifer', last_name: 'Lopez', email: 'jlo@fakeemail.com', password: 12345678, gender: 'Female', city: 'Miami', age: 31})
julia = User.create!({first_name: 'Julia', last_name: 'Roberts', email: 'jroberts@fakeemail.com', password: 12345678, gender: 'Female', city: 'Montana', age: 28})
emma = User.create!({first_name: 'Emma', last_name: 'stone', email: 'estone@fakeemail.com', password: 12345678, gender: 'Female', city: 'Las Vegas', age: 22})
cary = User.create!({first_name: 'Cary', last_name: 'Grant', email: 'cgrant@fakeemail.com', password: 12345678, gender: 'Male', city: 'Los Angeles', age: 30})

# demo = Spot.create!({host_id: User.find_by(email: "abc@abc.com").id, 
# host_name: User.find_by(email: "abc@abc.com").first_name + " " + User.find_by(email: "abc@abc.com").last_name, 
# site: 'Golden Gate Park', location_name: "Demo Pad", max_guests: 2})

spot1 = Spot.create!({host_id: jennie.id, 
host_name: jennie.first_name + " " + jennie.last_name, 
site: 'Yosemite', location_name: "Casa Lilly", max_guests: 2})
spot1.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/yosemite/yosemite-merced.png"), filename: "lily-pad-pond-yosemite.jpg")
spot1.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/yosemite/yosemite.jpg"), filename: "yosemite.jpg")
spot1.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/yosemite/yosemite_2.jpg"), filename: "yosemite_2.jpg")
spot1.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/yosemite/yosemite_3.jpg"), filename: "yosemite_3.jpg")
spot1.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/yosemite/yosemite_4.jpg"), filename: "yosemite_4.jpg")
spot1.save!

spot2 = Spot.create!({host_id: jennie.id, 
host_name: jennie.first_name + " " + jennie.last_name, 
site: 'Grand Canyon', location_name: "Grand Pond", max_guests: 1})
spot2.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Grand+Canyon/grand_lilly.png"), filename: "grand_lilly.png")
spot2.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Grand+Canyon/grand_1.jpeg"), filename: "grand_1.jpeg")
spot2.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Grand+Canyon/grand_2.jpg"), filename: "grand_2.jpg")
spot2.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Grand+Canyon/grand_3.jpg"), filename: "grand_3.jpg")
spot2.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Grand+Canyon/grand_4.jpg"), filename: "grand_4.jpg")
spot2.save!

spot3 = Spot.create!({host_id: jennie.id, 
host_name: jennie.first_name + " " + jennie.last_name,
site: 'Everglades National Park', location_name: "Lilly by the Glades", max_guests: 3})
spot3.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Everglades/glades_lilly.webp"), filename: "glades_lilly.webp")
spot3.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Everglades/everglades_1.jpg"), filename: "everglades_1.jpg")
spot3.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Everglades/everglades_2.jpg"), filename: "everglades_2.jpg")
spot3.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Everglades/everglades_3.jpg"), filename: "everglades_3.jpg")
spot3.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Everglades/everglades_4.jpg"), filename: "everglades_4.jpg")
spot3.save!

spot4 = Spot.create!({host_id: jennie.id, 
host_name: jennie.first_name + " " + jennie.last_name, 
site: 'Glacier National Park', location_name: "Home of Lillies", max_guests: 2})
spot4.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Glacier/glacier_lilly.jpg"), filename: "glacier_lilly.jpg")
spot4.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Glacier/glacier_1.jpg"), filename: "glacier_1.jpg")
spot4.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Glacier/glacier_2.jpg"), filename: "glacier_2.jpg")
spot4.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Glacier/glacier_3.jpg"), filename: "glacier_3.jpg")
spot4.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Glacier/glacier_4.jpg"), filename: "glacier_4.jpg")
spot4.save!

spot5 = Spot.create!({host_id: jennie.id, 
host_name: jennie.first_name + " " + jennie.last_name,
site: 'Zion National Park', location_name: "Lilly Abode", max_guests: 1})
spot5.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Zion/zion_lilly.jpg"), filename: "zion_lilly.webp")
spot5.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Zion/zion_1.jpg"), filename: "zion_1.jpg")
spot5.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Zion/zion_2.webp"), filename: "zion_2.webp")
spot5.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Zion/zion_3.jpg"), filename: "zion_3.jpg")
spot5.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Zion/zion_4.jpeg"), filename: "zion_4.jpeg")
spot5.save!

spot6 = Spot.create!({host_id: jennie.id, 
host_name: jennie.first_name + " " + jennie.last_name,
site: 'Angeles National Forest', location_name: "Angel Crib", max_guests: 3})
spot6.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Angeles/angeles_lilly.jpg"), filename: "angeles_lilly.jpg")
spot6.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Angeles/angeles_1.jpeg"), filename: "angeles_1.jpeg")
spot6.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Angeles/angeles_2.jpg"), filename: "angeles_2.jpg")
spot6.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Angeles/angeles_3.jpeg"), filename: "angeles_3.jpeg")
spot6.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Angeles/angeles_4.jpg"), filename: "angeles_4.jpg")
spot6.save!

booking1 = Booking.create!({arrival_date: Date.new(2020, 10, 11), departure_date: Date.new(2020, 10, 15), num_travelers: 3, hopper_id: jennifer.id, spot_id: spot1.id, status: "pending"})
booking2 = Booking.create!({arrival_date: Date.new(2020, 10, 11), departure_date: Date.new(2020, 10, 15), num_travelers: 1, hopper_id: julia.id, spot_id: spot2.id, status: "approved"})
booking3 = Booking.create!({arrival_date: Date.new(2020, 10, 11), departure_date: Date.new(2020, 10, 15), num_travelers: 2, hopper_id: cary.id, spot_id: spot3.id, status: "denied"})