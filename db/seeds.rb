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

demo_user= User.create!({first_name: 'Jennie', last_name: 'Richardson', email: 'abc@abc.com', password: 'hunter12', gender: 'Female', city: 'San Francisco', age: 23})

jennie = User.create!({first_name: 'Maria', last_name: 'Richardson', email: 'mrichardson@fakeemail.com', password: 12345678, gender: 'Female', city: 'Fresno', age: 21})
tom = User.create!({first_name: 'Tom', last_name: 'Cruise', email: 'tcruise@fakeemail.com', password: 12345678, gender: 'Male', city: 'New York', age: 50})
james = User.create!({first_name: 'James', last_name: 'Bond', email: 'jbond@fakeemail.com', password: 12345678, gender: 'Male', city: 'Las Vegas', age: 45})
jennifer = User.create!({first_name: 'Jennifer', last_name: 'Lopez', email: 'jlo@fakeemail.com', password: 12345678, gender: 'Female', city: 'Miami', age: 31})
julia = User.create!({first_name: 'Julia', last_name: 'Roberts', email: 'jroberts@fakeemail.com', password: 12345678, gender: 'Female', city: 'Montana', age: 28})
emma = User.create!({first_name: 'Emma', last_name: 'stone', email: 'estone@fakeemail.com', password: 12345678, gender: 'Female', city: 'Las Vegas', age: 22})
cary = User.create!({first_name: 'Cary', last_name: 'Grant', email: 'cgrant@fakeemail.com', password: 12345678, gender: 'Male', city: 'Los Angeles', age: 30})


spot1 = Spot.create!({host_id: jennie.id, 
site: 'Yosemite', location_name: "Casa Lilly", max_guests: 2, reviews: []})
# spot1.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/index/Index_Yosemite_29.png"), filename: "Index_Yosemite_29.png")
spot1.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/yosemite/yosemite.jpg"), filename: "yosemite.jpg")
spot1.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/yosemite/yosemite_2.jpg"), filename: "yosemite_2.jpg")
spot1.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/yosemite/yosemite_3.jpg"), filename: "yosemite_3.jpg")
spot1.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/yosemite/yosemite_4.jpg"), filename: "yosemite_4.jpg")
spot1.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/yosemite_valley.jpg"), filename: "yosemite_valley.jpg")
spot1.save!

spot2 = Spot.create!({host_id: jennie.id, 
site: 'Grand Canyon', location_name: "Grand Lilly", max_guests: 1, reviews: []})
# spot2.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/index/Index_GrandCanyon_29.jpg"), filename: "Index_GrandCanyon_29.jpg")
spot2.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Grand+Canyon/grand_1.jpeg"), filename: "grand_1.jpeg")
spot2.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Grand+Canyon/grand_2.jpg"), filename: "grand_2.jpg")
spot2.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Grand+Canyon/grand_3.jpg"), filename: "grand_3.jpg")
spot2.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Grand+Canyon/grand_4.jpg"), filename: "grand_4.jpg")
spot2.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Grand+Canyon/grand_5.jpg"), filename: "grand_5.jpg")
spot2.save!

spot3 = Spot.create!({host_id: jennie.id,
site: 'Everglades National Park', location_name: "Lilly by the Glades", max_guests: 3, reviews: []})
# spot3.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/index/Index_Everglades_29.jpg"), filename: "Index_Everglades_29.jpg")
spot3.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Everglades/everglades_1.jpg"), filename: "everglades_1.jpg")
spot3.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Everglades/everglades_2.jpg"), filename: "everglades_2.jpg")
spot3.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Everglades/everglades_3.jpg"), filename: "everglades_3.jpg")
spot3.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Everglades/everglades_4.jpg"), filename: "everglades_4.jpg")
spot3.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Everglades/glades_lilly.webp"), filename: "glades_lilly.webp")
spot3.save!

spot4 = Spot.create!({host_id: jennie.id,
site: 'Glacier National Park', location_name: "Home of Lillies", max_guests: 2, reviews: []})
# spot4.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/index/Index_Glacier_29.jpg"), filename: "Index_Glacier_29.jpg")
spot4.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Glacier/glacier_1.jpg"), filename: "glacier_1.jpg")
spot4.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Glacier/glacier_2.jpg"), filename: "glacier_2.jpg")
spot4.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Glacier/glacier_3.jpg"), filename: "glacier_3.jpg")
spot4.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Glacier/glacier_4.jpg"), filename: "glacier_4.jpg")
spot4.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Glacier/glacier_5.jpg"), filename: "glacier_5.jpg")
spot4.save!

spot5 = Spot.create!({host_id: jennie.id, 
site: 'Zion National Park', location_name: "Lilly Abode", max_guests: 1, reviews: []})
# spot5.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/index/Index_Zion_29.jpg"), filename: "Index_Zion_29.jpg")
spot5.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Zion/zion_1.jpg"), filename: "zion_1.jpg")
spot5.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Zion/zion_2.webp"), filename: "zion_2.webp")
spot5.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Zion/zion_3.jpg"), filename: "zion_3.jpg")
spot5.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Zion/zion_4.jpeg"), filename: "zion_4.jpeg")
spot5.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Zion/zion_5.jpg"), filename: "zion_5.jpeg")
spot5.save!

spot6 = Spot.create!({host_id: jennie.id, 
site: 'Angeles National Forest', location_name: "Cozy Pad", max_guests: 3, reviews: []})
# spot6.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/index/Index_Angeles_29.jpg"), filename: "Index_Angeles_29.jpg")
spot6.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Angeles/angeles_1.jpeg"), filename: "angeles_1.jpeg")
spot6.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Angeles/angeles_2.jpg"), filename: "angeles_2.jpg")
spot6.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Angeles/angeles_3.jpeg"), filename: "angeles_3.jpeg")
spot6.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Angeles/angeles_4.jpg"), filename: "angeles_4.jpg")
spot6.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Angeles/angeles_5.jpeg"), filename: "angeles_5.jpg")
spot6.save!

spot7 = Spot.create!({host_id: jennie.id,
site: 'Haleakala National Park', location_name: "Lanai Lilly", max_guests: 4, reviews: []})
# spot7.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/index/Index_Haleakala_29.jpg"), filename: "Index_Haleakala_29.jpg")
spot7.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/haleakala/haleakala1.jpg"), filename: "haleakala1.jpg")
spot7.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/haleakala/haleakala2.jpg"), filename: "haleakala2.jpg")
spot7.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/haleakala/haleakala3.jpg"), filename: "haleakala3.jpg")
spot7.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/haleakala/haleakala4.jpg"), filename: "haleakala4.jpg")
spot7.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/haleakala/haleakala5.jpg"), filename: "haleakala5.jpg")
spot7.save!

spot8 = Spot.create!({host_id: jennie.id, 
site: 'Yellowstone National Park', location_name: "Amber lilly", max_guests: 2, reviews: []})
# spot8.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/index/Index_Yellowstone_29.jpg"), filename: "Index_Yellowstone_29.jpg")
spot8.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Yellowstone/yellowstone1.jpg"), filename: "yellowstone1.jpg")
spot8.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Yellowstone/yellowstone2.jpg"), filename: "yellowstone2.jpg")
spot8.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Yellowstone/yellowstone3.jpg"), filename: "yellowstone3.jpg")
spot8.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Yellowstone/yellowstone4.jpg"), filename: "yellowstone4.jpg")
spot8.photos.attach(io: open("https://lillypad-seeds.s3-us-west-1.amazonaws.com/Yellowstone/yellowstone5.jpg"), filename: "yellowstone5.jpg")
spot8.save!

booking1 = Booking.create!({arrival_date: Date.new(2020, 10, 11), departure_date: Date.new(2020, 10, 15), num_travelers: 3, hopper_id: jennifer.id, spot_id: spot1.id, status: "Pending"})
booking2 = Booking.create!({arrival_date: Date.new(2020, 10, 11), departure_date: Date.new(2020, 10, 15), num_travelers: 1, hopper_id: julia.id, spot_id: spot2.id, status: "Approved"})
booking3 = Booking.create!({arrival_date: Date.new(2020, 10, 11), departure_date: Date.new(2020, 10, 15), num_travelers: 2, hopper_id: cary.id, spot_id: spot4.id, status: "Denied"})