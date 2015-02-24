# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:

team1 = Team.create(teamname: "Firstteam", city: "Munich", password: "mo")
player = team1.players.create(prename: "Rave")
player = team1.players.create(prename: "Shave")
message = team1.messages.create(text: "arrived in Paris")
position1 = team1.positions.create(latitude: 48.851965, longitude: 2.338478, text: "Bonsoir, les éditeurs")
position2 = team1.positions.create(latitude: 49.851965, longitude: 7.338478, text: "Saludos")
position3 = team1.positions.create(latitude: 55.851965, longitude: 9.338478, text: "Greetings")
position4 = team1.positions.create(latitude: 56.851965, longitude: 10.338478, text: "Servus")
position5 = team1.positions.create(latitude: 57.851965, longitude: 12.338478, text: "Irschwikata")



#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
