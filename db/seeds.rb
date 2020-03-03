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