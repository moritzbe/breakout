# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:

team1 = Team.create(teamname: "Firstteam", city: "Munich", password: "mo", teamcolor: "#2EFE9A")
player = team1.players.create(prename: "Rave")
player = team1.players.create(prename: "Shave")
message = team1.messages.create(text: "arrived in Paris")
position2 = team1.positions.create(latitude: 49.851965, longitude: 7.338478, text: "Saludos", distance: 100)
position3 = team1.positions.create(latitude: 55.851965, longitude: 9.338478, text: "Greetings", distance: 300)
position4 = team1.positions.create(latitude: 56.851965, longitude: 10.338478, text: "Servus", distance: 500)
position5 = team1.positions.create(latitude: 57.851965, longitude: 12.338478, text: "Irschwikata", distance: 700)


team2 = Team.create(teamname: "Secondteam", city: "Munich", password: "mo", teamcolor: "#0101DF")
player = team2.players.create(prename: "Remi")
player = team2.players.create(prename: "Jose")
message = team2.messages.create(text: "Burkina Faso")
message2 = team2.messages.create(text: "Strange Dudes on the way.")
position2 = team2.positions.create(latitude: 35.851965, longitude: 9.338478, text: "No money left...", distance: 7)
position3 = team2.positions.create(latitude: 30.851965, longitude: 6.338478, text: "Hitching Camels!", distance: 7)
position4 = team2.positions.create(latitude: 19.851965, longitude: -1, text: "Through Desert", distance: 7)
position5 = team2.positions.create(latitude: 11.325349, longitude: -3.140441, text: "Arrived in Ioba, Burkina Faso", distance: 700)


team3 = Team.create(teamname: "OldVTeam", city: "Munich", password: "mo", teamcolor: "#FF8000")
player = team3.players.create(prename: "Mike")
player = team3.players.create(prename: "Rich")
position2 = team3.positions.create(latitude: 51.595659, longitude: 4.893404, text: "Hitching a Boat", distance: 7)
position4 = team3.positions.create(latitude: 50.831778, longitude: 0.434328, text: "English Beer!", distance: 7)
position5 = team3.positions.create(latitude: 51.505996, longitude: -0.099882, text: "LondonTown!", distance: 1000)
sponsor = team3.sponsors.create(sponsorname: "Space X", email: "blah", moneyperk: 1, limit: 800)
sponsor2 = team3.sponsors.create(sponsorname: "Morris", email: "blah", moneyperk: 1, limit: 40)

team4 = Team.create(teamname: "Enterprise", city: "Munich", password: "mo", teamcolor: "#FFFF00")
player = team4.players.create(prename: "Thomas")
player = team4.players.create(prename: "Phoebe")
message = team4.messages.create(text: "Eastern Delight")
message2 = team4.messages.create(text: "Hola Holero")
position1 = team4.positions.create(latitude: 49.989334, longitude: 14.782983, text: "Prahahahaha", distance: 7)
position2 = team4.positions.create(latitude: 52.196791, longitude: 21.242943, text: "Poland here we come", distance: 4)
position4 = team4.positions.create(latitude: 54.784177, longitude: 23.879663, text: "Hola Vilnius!", distance: 300)
position5 = team4.positions.create(latitude: 56.953325, longitude: 24.407007, text: "Riga and the sea", distance: 500)
sponsor = team4.sponsors.create(sponsorname: "Fiskus", email: "blah", moneyperk: 1, limit: 300)
sponsor2 = team4.sponsors.create(sponsorname: "Family", email: "blah", moneyperk: 1)

team5 = Team.create(teamname: "Ismael K", city: "Munich", password: "mo", teamcolor: "#1C1C1C")
player = team5.players.create(prename: "Anna")
player = team5.players.create(prename: "Anastasia")
position1 = team5.positions.create(latitude: 49.989334, longitude: 14.782983, text: "Eastern Delighted", distance: 7)
position2 = team5.positions.create(latitude: 52.196791, longitude: 13.242943, text: "Where are we", distance: 4)
position4 = team5.positions.create(latitude: 54.784177, longitude: 10.879663, text: "---->>>", distance: 2000)
position5 = team5.positions.create(latitude: 60.953325, longitude: 5.407007, text: "Done and arrived", distance: 3000)
sponsor = team5.sponsors.create(sponsorname: "Fiskus", email: "blah", moneyperk: 1.2, limit: 399)
sponsor2 = team5.sponsors.create(sponsorname: "Family", email: "blah", moneyperk: 0.2)

