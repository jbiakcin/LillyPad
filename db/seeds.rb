# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Spot.destroy_all

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

spot1 = Spot.create!({host_id: User.find_by(email: "jrichardson@fakeemail.com").id, 
host_name: User.find_by(email: "jrichardson@fakeemail.com").first_name + " " + User.find_by(email: "jrichardson@fakeemail.com").last_name, 
site: 'Niagra Falls', location_name: "Casa Lilly", max_guests: 2})

spot2 = Spot.create!({host_id: User.find_by(email: "jrichardson@fakeemail.com").id, 
host_name: User.find_by(email: "jrichardson@fakeemail.com").first_name + " " + User.find_by(email: "jrichardson@fakeemail.com").last_name, 
site: 'Grand Canyon', location_name: "Bond Pond", max_guests: 1})

spot3 = Spot.create!({host_id: User.find_by(email: "jrichardson@fakeemail.com").id, 
host_name: User.find_by(email: "jrichardson@fakeemail.com").first_name + " " + User.find_by(email: "jrichardson@fakeemail.com").last_name,
site: 'Everglades National Park', location_name: "JLo Pad", max_guests: 3})

spot4 = Spot.create!({host_id: User.find_by(email: "jrichardson@fakeemail.com").id, 
host_name: User.find_by(email: "jrichardson@fakeemail.com").first_name + " " + User.find_by(email: "jrichardson@fakeemail.com").last_name, 
site: 'Glacier National Park', location_name: "Home of Lillies", max_guests: 2})

spot5 = Spot.create!({host_id: User.find_by(email: "jrichardson@fakeemail.com").id, 
host_name: User.find_by(email: "jrichardson@fakeemail.com").first_name + " " + User.find_by(email: "jrichardson@fakeemail.com").last_name,
site: 'Zion National Park', location_name: "Lilly Abode", max_guests: 1})

spot6= Spot.create!({host_id: User.find_by(email: "jrichardson@fakeemail.com").id, 
host_name: User.find_by(email: "jrichardson@fakeemail.com").first_name + " " + User.find_by(email: "jrichardson@fakeemail.com").last_name,
site: 'Angeles National Forest', location_name: "Grand Pad", max_guests: 5})

