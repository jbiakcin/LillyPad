# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

demo_user= User.create!({first_name: 'Demo', last_name: 'User', email: 'abc@abc.com', password: 'hunter12'})

tom = User.create!({first_name: 'Tom', last_name: 'Cruise', email: 'tcruise@fakeemail.com', password: 12345678})
james = User.create!({first_name: 'James', last_name: 'Bond', email: 'jbond@fakeemail.com', password: 12345678})
jennifer = User.create!({first_name: 'Jennifer', last_name: 'Lopez', email: 'jlo@fakeemail.com', password: 12345678})
julia = User.create!({first_name: 'Julia', last_name: 'Roberts', email: 'jroberts@fakeemail.com', password: 12345678})
emma = User.create!({first_name: 'Emma', last_name: 'stone', email: 'estone@fakeemail.com', password: 12345678})
cary = User.create!({first_name: 'Cary', last_name: 'Grant', email: 'cgrant@fakeemail.com', password: 12345678})

demo = Spot.create!({host_id: User.find_by(email: "abc@abc.com").id, 
host_name: User.find_by(email: "abc@abc.com").first_name + " " + User.find_by(email: "abc@abc.com").last_name, 
site: 'Golden Gate Park', location_name: "Demo Pad", max_guests: 2})

cruise = Spot.create!({host_id: User.find_by(email: "tcruise@fakeemail.com").id, 
host_name: User.find_by(email: "tcruise@fakeemail.com").first_name + " " + User.find_by(email: "tcruise@fakeemail.com").last_name, 
site: 'Niagra Falls', location_name: "Casa Cruise", max_guests: 8})

bond = Spot.create!({host_id: User.find_by(email: "jbond@fakeemail.com").id, 
host_name: User.find_by(email: "jbond@fakeemail.com").first_name + " " + User.find_by(email: "jbond@fakeemail.com").last_name, 
site: 'Grand Canyon', location_name: "Bond Mansion", max_guests: 5})

lopez = Spot.create!({host_id: User.find_by(email: "jlo@fakeemail.com").id, 
host_name: User.find_by(email: "jlo@fakeemail.com").first_name + " " + User.find_by(email: "jlo@fakeemail.com").last_name, 
site: 'Everglades National Park', location_name: "JLo Home", max_guests: 5})

roberts = Spot.create!({host_id: User.find_by(email: "jroberts@fakeemail.com").id, 
host_name: User.find_by(email: "jroberts@fakeemail.com").first_name + " " + User.find_by(email: "jroberts@fakeemail.com").last_name, 
site: 'Glacier National Park', location_name: "Home of Smiles", max_guests: 4})

stone = Spot.create!({host_id: User.find_by(email: "estone@fakeemail.com").id, 
host_name: User.find_by(email: "estone@fakeemail.com").first_name + " " + User.find_by(email: "estone@fakeemail.com").last_name, 
site: 'Zion National Park', location_name: "Stone Abode", max_guests: 3})

grant = Spot.create!({host_id: User.find_by(email: "cgrant@fakeemail.com").id, 
host_name: User.find_by(email: "cgrant@fakeemail.com").first_name + " " + User.find_by(email: "cgrant@fakeemail.com").last_name, 
site: 'Angeles National Forest', location_name: "Grant Base", max_guests: 3})

