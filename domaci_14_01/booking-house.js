"use strict";
// Bookmaker’s
// In your IDE of choice, create a new JavaScript file named booking - house.js and make it so
// that all code written in the file follows JS strict mode.
// Create an anonymous immediately - invoking function that will hold main execution of all program
// calls.Make sure that functions that you write in this function are pure functions.
(function () {
    function createNewPlayer(person, betAmount, country) {
        return new Player(person, betAmount, country)
    }
})()

// Create constructor functions with properties representing the following:
// ● Country - name, odds, continent(EU, AS, AF, SA, NA, AU)
// ● Person - name, surname, date of birth
// Player - person(instance of Person), bet amount, country(instance of Country)
// Address - country, city, postal code, street and number
// ● BettingPlace - address and list of players(initially empty)
// ● BettingHouse - competition, list of betting places(initially empty) and number of players
// Create continents as constants (objects that can not change).So, when passing a continent as a
// parameter, you should pass Continent.ASIA.

// Add a method to Person that returns a formatted string containing the name, surname and date
// of birth of the person(date of birth in dd.mm.yy format).

// Add a method to Address that returns a formatted string like the following one:
// Nemanjina 4, 11000 Beograd, SR

function Country(name, odds, continent) {
    this.name = name,
        this.odds = odds,
        this.continent = continent
}
var country1 = new Country("RS", 2, "Europe")
var country2 = new Country("GR", 3, "Europe")
var country3 = new Country("RS", 2, "Europe")
var country4 = new Country("RS", 4, "Europe")
console.log(country1)

function Person(name, surname, dateOfBirth) {
    this.name = name,
        this.surname = surname,
        this.dateOfBirth = (function () {
            var objectDate = new Date(dateOfBirth);
            var day = objectDate.getDate();
            var month = objectDate.getMonth() + 1;
            var year = objectDate.getFullYear();
            var format1 = day + "." + month + "." + year;
            return format1
        })()
    this.personInfo = function () {
        return this.name + " " + this.surname + ", " + this.dateOfBirth
    }
}

var person1 = new Person("Aneta", "Milosevic", "1985.03.03")
var person2 = new Person("Pera", "Peric", "1982.07.16")
var person3 = new Person("Marko", "MArkoviç", "1983.8.12")
var person4 = new Person("Ivan", "Ivanovic", "1984.07.02")
console.log(person1)
console.log(person1.personInfo())

function Player(person, betAmount, country) {
    this.person = person,
        this.betAmount = betAmount,
        this.country = country
    this.yearsOld = function () {
        var today = new Date()
        var personsDob = new Date(this.person.dateOfBirth)
        var year = today.getFullYear();
        var personYob = personsDob.getFullYear()
        return year - personYob + " years"
    }

    this.playerInfo = function () {
        var winAmount = (this.country.odds * this.betAmount / 100).toFixed(2)
        return this.country.name + " " + winAmount + " eur, " + this.person.personInfo()
    }
}
var player1 = new Player(person1, 20000, country1)
var player2 = new Player(person2, 50000, country2)
var player3 = new Player(person3, 70000, country3)
var player4 = new Player(person4, 80000, country4)
console.log(player1)
console.log(player1.playerInfo(country1, person1))
console.log(player1.yearsOld(person1.dateOfBirth.objectDate))
// Add a method to Player that returns a formatted string containing a country, expected win
// amount(odds * bet amount) and person data.
//     SR, 1050.00 eur, Pera Peric, 29 years
function Address(country, city, postalCode, street, numb) {
    this.country = country,
        this.city = city,
        this.postalCode = postalCode,
        this.street = street,
        this.numb = numb
    this.fullAddress = function () {
        return this.street + " " + this.numb + ", " + this.postalCode + " " + this.city + ", " + country1.name
    }
}
var address1 = new Address(country1, "Beograd", "11000", "Nemanjina", 4)
var address2 = new Address(country2, "Beograd", "11000", "Njegoseva", 50)
console.log(address1)
console.log(address1.fullAddress())


function BettingPlace(address) {
    this.address = address,
        this.playerList = []
    this.addPlayers = function (player) {
        if (player) {
            this.playerList.push(player)
        }
    }
    this.bettingPlaceInfo = function () {
        var sum = this.playerList.reduce((prev, curr) => prev + curr.betAmount, 0)
        return this.address.street + " " + this.address.postalCode + " " + this.address.city + " sum of all bets: " + sum + " eur"
    }
}
var bettingPlace1 = new BettingPlace(address1)
var bettingPlace2 = new BettingPlace(address2)
bettingPlace1.addPlayers(player1)
bettingPlace1.addPlayers(player2)
bettingPlace2.addPlayers(player3)
bettingPlace2.addPlayers(player4)
console.log(bettingPlace1)
console.log(bettingPlace1.playerList)
console.log(bettingPlace1.bettingPlaceInfo(address1))


function BettingHouse(competition, numberOfPlayers) {
    this.competition = competition,
        this.listOfBettingPlaces = [],
        this.addBettingPlaces = function (bettingPlace) {
            if (bettingPlace) {
                this.listOfBettingPlaces.push(bettingPlace)
            }
        },
        this.numberOfPlayers = numberOfPlayers
    this.display = function () {
        var countries = []
        var result = this.competition + ", " + this.listOfBettingPlaces.length + " betting places, " + this.numberOfPlayers + " bets";
        for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
            result += "\n" +
                this.listOfBettingPlaces[i].bettingPlaceInfo() + '\n'

            for (var j = 0; j < this.listOfBettingPlaces[i].playerList.length; j++) {
                result += this.listOfBettingPlaces[i].playerList[j].playerInfo() + '\n'
                countries.push(this.listOfBettingPlaces[i].playerList[j].country.name)
            }
        }
        var rsCount = countries.filter(elem => elem === "RS")
        return result + '\n' + "There are " + rsCount.length + " bets on Serbia"
    }
}
var bettingHouse1 = new BettingHouse("Football World Cup Winner", 4)
bettingHouse1.addBettingPlaces(bettingPlace1)
bettingHouse1.addBettingPlaces(bettingPlace2)
console.log(bettingHouse1.display())


// Add a method to BettingPlace that returns a formatted string containing a street(without a
// number), postal code and city, and sum of all bet amounts of that place.
//     Nemanjina, 11000 Belgrade, sum of all bets: 50000eur
// Add a method to BettingPlace that adds a player to the players list of a betting place.

// Inside your immediately - invoking function, add a function that returns a created Player.
// Inside your immediately - invoking function, add a function that creates a BettingPlace.

// Create an instance of the BettingHouse that receives the name of competition.
// Create four players with random data.Create two betting places.Add created players as you wish
// to Betting places.Add betting places to the betting house.
// Display all betting house data in the following manner:

// Football World Cup Winner, 2 betting places, 4 bets
// Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// SR, 1050.00 eur, Pera Peric, 29 years
// SR, 1050.00 eur, Pera Peric, 29 years
// Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// GR, 1050.00 eur, Pera Peric, 29 years
// SR, 1050.00 eur, Pera Peric, 29 years
// There are 3 bets on Serbia