# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:

team1 = Team.create(teamname: "Firstteam", city: "Munich", password: "mo", teamcolor: "#2EFE9A")
player = team1.players.create(prename: "Rave")
player = team1.players.create(prename: "Shave")
message = team1.messages.create(text: "arrived in Paris")
position1 = team1.positions.create(latitude: 48.150473, longitude: 11.581189, text: "Bonsoir, les éditeurs")
position2 = team1.positions.create(latitude: 49.851965, longitude: 7.338478, text: "Saludos")
position3 = team1.positions.create(latitude: 55.851965, longitude: 9.338478, text: "Greetings")
position4 = team1.positions.create(latitude: 56.851965, longitude: 10.338478, text: "Servus")
position5 = team1.positions.create(latitude: 57.851965, longitude: 12.338478, text: "Irschwikata")


team2 = Team.create(teamname: "Secondteam", city: "Munich", password: "mo", teamcolor: "#0101DF")
player = team2.players.create(prename: "Remi")
player = team2.players.create(prename: "Jose")
message = team2.messages.create(text: "Burkina Faso")
message2 = team2.messages.create(text: "Strange Dudes on the way.")
position1 = team2.positions.create(latitude: 48.150473, longitude: 11.581189, text: "Off we go...")
position2 = team2.positions.create(latitude: 35.851965, longitude: 9.338478, text: "No money left...")
position3 = team2.positions.create(latitude: 30.851965, longitude: 6.338478, text: "Hitching Camels!")
position4 = team2.positions.create(latitude: 19.851965, longitude: -1, text: "Through Desert")
position5 = team2.positions.create(latitude: 11.325349, longitude: -3.140441, text: "Arrived in Ioba, Burkina Faso")


team3 = Team.create(teamname: "OldVTeam", city: "Munich", password: "mo", teamcolor: "#FF8000")
player = team3.players.create(prename: "Mike")
player = team3.players.create(prename: "Rich")
message = team3.messages.create(text: "We want to make it to England")
message2 = team3.messages.create(text: "The Netherlands. Lets get some Poffatjes")
position1 = team3.positions.create(latitude: 49.715411, longitude: 9.903170, text: "Off we go...")
position2 = team3.positions.create(latitude: 51.595659, longitude: 4.893404, text: "Hitching a Boat")
position4 = team3.positions.create(latitude: 50.831778, longitude: 0.434328, text: "English Beer!")
position5 = team3.positions.create(latitude: 51.505996, longitude: -0.099882, text: "LondonTown!")

#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
