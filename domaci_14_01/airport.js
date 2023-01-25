"use strict";
// Airport
// In your IDE of choice, create a new JavaScript file named airport.js and make it so that all
// code written in the file follows JS strict mode.
// Create an anonymous immediately - invoking function that will hold the main execution of all
// program calls.Writing a simple command console.log(“Hi”) inside this function and running
// the code should output “Hi“ in the console.

(function () {
    console.log("Hi")
})()

// Create constructor functions with properties representing the following:
// ● Person - name, surname
// ● Seat - number, category(can be "b" for business or "e" for economy)
// ● Passenger - person(instance of Person), seat(instance of Seat)
// ● Flight - relation, date and list of passengers(initially empty)
// ● Airport - name(should be a hard - coded value "Nikola Tesla"), list of flights
// If category is not provided for Seat, assume it’s economy(“e”).
// If seat number is not provided, assign a random number between 10 and 100.
// Add getData method to Person.It should return a formatted string containing the name and
// surname of the person.
// "John", "Snow" -> "John Snow”
// Add getData method to Seat.It should return a formatted string containing a seat number and
// category.
// 12, "B" -> "12, B”

// Add getData method to Passenger.It should return a formatted string containing a seat
// number, category letter(always in uppercase), a name and surname.To display seat data, use
// getData method of the Seat object.The same goes for the person data.
//     personObj, seatObj -> 12, B, John Snow

// Add addPassenger method to Flight.It should receive Passenger and add the passenger to
// the passenger list of a given flight.

// Add addFlight method to Airport.It should add the flight to the list of flights of the airport.

// Add getData method to Flight.It should return a formatted string containing a date, relation, all
// data related to the flight and list of passengers with their data.
// 25.10.2017, Belgrade - Paris
// 1, B, John Snow
// 2, E, Cersei Lannister

// Inside your immediately - invoking function, add createPassenger function that receives a first
// name, last name, seat number and category and returns a created Passenger.

// In you main program function, create an instance of the Airport object.
// Create two instances of the Flight object using the createFlight function and the following
// data:
// relation: "Belgrade - New York" date: "Oct 25 2017"
// relation: "Barcelona - Belgrade" date: "Nov 11 2017"
// Create four instances of the Passenger object using the createPassenger function with the
// following data:
// Name: "John" surname: "Snow" seat number: 1 category: "b"
// Name: "Cersei" surname: "Lannister" seat number: 2 category: "b"
// Name: "Daenerys" surname: "Targaryen" seat number: 14
// Name: "Tyrion" surname: "Lannister"
// Add the first two passengers to the first flight and the second two to the second flight using the
// Flight’s addPassenger method.
// Add the created flight instances to the airport using Airport’s addFlight method.
// Call Airport’s getData method to display the airport data output in the following manner:
// Airport: Nikola Tesla, total passengers: 4
// 25.10.2017, Belgrade - Paris
// 1, B, John Snow
// 2, E, Cersei Lannister
// 11.11.2017, Barcelona - Belgrade
// 3, E, Daenerys Targaryen
// 4, E, Tyrion Lannister

function Person(name, surname) {
    this.name = name,
        this.surname = surname
    this.getData = function () {
        var data = this.name + " " + this.surname
        return data
    }
}

function Seat(numb, category) {
    this.numb = function () {
        if (numb > 10 && numb < 100) {
            numb = numb
        } else {
            numb = Math.floor(Math.random() * (100 - 10 + 1) + 10)
        }
        return numb
    }
    this.category = function () {
        if (category === "b") {
            category = "b"
        } else {
            category = "a"
        }
        return category
    }
    this.getData = function () {
        var data = this.numb() + ", " + this.category().toUpperCase()
        return data
    }
}


function Passenger(person, seat) {
    this.person = person,
        this.seat = seat
    this.getData = function () {
        return this.seat.getData() + ", " + this.person.getData()
    }
}

function Flight(relation) {
    this.relation = relation,
        this.dateOfFlight = function () {
            var objectDate = new Date();
            var day = objectDate.getDate();
            var month = objectDate.getMonth() + 1;
            var year = objectDate.getFullYear();
            var format1 = day + "." + month + "." + year;
            return format1
        }
    this.passengerList = [],
        this.addPassenger = function (passenger) {
            if (passenger) {
                return this.passengerList.push(passenger)
            }
        }
    this.getData = function () {
        var flightData = this.dateOfFlight() + ", " + this.relation + ", " + "\n"
        for (var i = 0; i < this.passengerList.length; i++) {
            flightData += this.passengerList[i].getData() + "\n"
        }
        return flightData
    }
}

function Airport(airportName) {
    this.airportName = airportName,
        this.listOfFlights = []
    this.addFlight = function (flightList) {
        return this.listOfFlights.push(flightList)
    }
    this.getData = function () {
        var noOfPass = 0
        var res = ''
        for (var i = 0; i < this.listOfFlights.length; i++) {
            res += this.listOfFlights[i].getData() + "\n"
            for (var j = 0; j < this.listOfFlights[i].passengerList.length; j++) {
                noOfPass++
            }
        }
        var airportData = "Airport: " + this.airportName + ", " + "total passengers: " + noOfPass + "\n" + res
        return airportData
    }
}

var person1 = new Person("John", "Snow")
var person2 = new Person("Cersei", "Lannister")
var person3 = new Person("Daenerys", "Targaryen")
var person4 = new Person("Tyrion", "Lannister")
var seat1 = new Seat(1, "b")
var seat2 = new Seat(2, "b")
var seat3 = new Seat(14)
var seat4 = new Seat("")
var passenger1 = new Passenger(person1, seat1)
var passenger2 = new Passenger(person2, seat2)
var passenger3 = new Passenger(person3, seat3)
var passenger4 = new Passenger(person4, seat4)

var flight1 = new Flight("Belgrade - New York")
var flight2 = new Flight("Barcelona - Belgrade")
var airport1 = new Airport("Nikola Tesla")

console.log(seat1.category(), seat1.numb())
console.log(person1.getData())
console.log(person2.getData())
console.log(seat1.getData())

console.log(passenger1.getData(seat1, person1))
console.log(passenger2.getData(seat2, person2))


flight1.addPassenger(passenger1)
flight1.addPassenger(passenger2)
flight2.addPassenger(passenger3)
flight2.addPassenger(passenger4)
console.log(flight1.passengerList)
console.log(flight2.relation)
airport1.addFlight(flight1)
airport1.addFlight(flight2)

console.log(airport1.listOfFlights)

console.log(flight1.getData())
console.log(airport1.getData(flight1))





// Hints
// List is a synonym for array, so when we say a list of flights, it’s actually an array of flight
// objects
// Use JS built -in Date()object to parse input date
// Use \t and \n special strings to format output
// Use built -in String methods to transform text from lowercase to uppercase
// Use Array’s built -in methods to add and remove elements from an array

// Extra
// Modify Flight getData method to return a formatted string as date and relation(as the first and
// the last consonant of the starting location - the first and the last consonant of the destination
// location) of the current flight.
// "Belgrade - Paris", "25.09.2017" -> 25.09.2017 BD - PS
// While adding passenger with addPassenger method, make sure that:
// Two passengers can not have the same seat number;
// The flight can not have more than 100 passengers;
// If a passenger with the same full name exists in a flight list, you should replace the existing
// passenger’s data with new data(e.g.it can happen when a passenger changes seats).
// Modify Passenger’s getData method to return full category name “business” for “b” and
// “economy” for “e”.
// Add the total number of passengers in business category for each flight and the total number of
// business category passengers for the airport to final output.
