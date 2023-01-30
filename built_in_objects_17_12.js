// Try to use built -in object methods to solve some of the problems here

// 1. Write a functional expression that duplicates each element of a given array.
//     Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

var duplicate = function duplicateArrayElements(arr) {
    var twice = x => [x, x]
    var result = arr.flatMap(twice)
    return result
}
console.log(duplicate([2, 4, 7, 11, -2, 1]))


// 2. Write a functional expression that removes all duplicates in a given array.
//     Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

var removeDuplicates = function removeDuplicatesFromArray(arr) {
    var result = [...new Set(arr)];
    return result.sort(function (a, b) {
        return a - b;
    });
}
console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]))

// 3.
// a.Write a function that checks if a given array has odd number of elements.
//     Input: [1, 2, 9, 2, 1]
// Output: true
// b.Write a function that counts the number of elements less than the middle
// element.If the given array has an even number of elements, print out an error
// message.
//     Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function isFunctionHasOddNumberOfElements(arr) {
    if (arr.length % 2 !== 0) {
        return true
    }
    else {
        return false
    }
}
console.log(isFunctionHasOddNumberOfElements([1, 2, 9, 2, 1]))

function countTheNumberOfElementsLessThanMiddleElement(arr) {
    var oddOrEvenNumberOfElements = isFunctionHasOddNumberOfElements(arr);
    var middle = 0;
    var lessThanMiddle = [];
    var result = 0;
    if (oddOrEvenNumberOfElements == true) {
        middle = arr[Math.floor(arr.length / 2)]
        lessThanMiddle = arr.filter(elem => elem < middle)
        result = lessThanMiddle.length;
        return result
    }
    else {
        return "error"
    }
}
console.log(countTheNumberOfElementsLessThanMiddleElement([-1, 8.1, 3, 6, 2.3, 44, 2.11]))


// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
//     Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

function smallestElementOfArray(arr) {
    var min = Math.min(...arr);
    var index = arr.lastIndexOf(min);
    var result = { minValue: min, minLastIndex: index }
    return result
}
console.log(smallestElementOfArray([1, 4, -2, 11, 8, 1, -2, 3]))

// 5.
// a.Write a function that finds all the elements in a given array less than a given
// element.
//     Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

// b.Write a function that finds all the elements in a given array that start with the “pro”
// substring.The function should be case insensitive.
//     Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]
// c.Write a function that expects an array and a callback function that filters out
// some of the elements.Use functions defined in a) or b) to test it.

function findElementsLessThanGivenElement(arr, givenElement) {
    var lessThanGivenElement = []
    lessThanGivenElement = arr.filter(elem => elem < givenElement)
    return lessThanGivenElement
}
console.log(findElementsLessThanGivenElement([2, 3, 8, -2, 11, 4], 6))


function findElementsThatStartsWithSomeString(arr, givenString) {
    var arrFilter = arr.filter(elem => elem.toLowerCase().startsWith(givenString))
    return arrFilter
}
console.log(findElementsThatStartsWithSomeString(["JavaScript", "Programming", "fun", "product"], "pro"))



function functionWithCallbackFunction(arr, callBack, param) {
    return callBack(arr, param)
}
console.log(functionWithCallbackFunction(["JavaScript", "Programming", "fun", "product"], findElementsThatStartsWithSomeString, 'pro'))

// 6.
// a.Write a list(array) of products you usually buy in the supermarket.Write a price
// and name for each product.For example,
//     [

//         { name: ‘apples’, price: 100},
//         { name: ‘milk’, price: 80},
//         { name:’bananas’, price: 150}
//     ]

// b.Write a function that calculates the total price of your shopping list.
//     c.Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.
//     d.Write a function that prints out the name of the most expensive product on your
// shopping list.Write the name in uppercase.

var shoppingList = [
    { name: "apples", price: 150 },
    { name: "bananas", price: 200 },
    { name: "mango", price: 300 },
    { name: "lemon", price: 270 }
]

function totalPriceOfShoppingList(arr) {
    var sum = arr.reduce((prev, current) => prev + current.price, 0)
    return sum
}
console.log(totalPriceOfShoppingList(shoppingList))

function averageProductPrice(arr) {
    var average = (arr.reduce((prev, current) => prev + current.price, 0)) / arr.length
    return average.toFixed(3)
}
console.log(averageProductPrice(shoppingList))


function mostExpensiveProduct(arr) {
    var maxPrice = Math.max(...arr.map(elem => elem.price));
    var mostExpensive = shoppingList.filter(shoppingItem => shoppingItem.price === maxPrice)
    return mostExpensive[0].name.toUpperCase()
}

console.log(mostExpensiveProduct(shoppingList))

// 7.
// a.Write a function that checks if a given string is written in all capitals.
//     b.Write a function that checks if a given string contains any digits.
//         c.Write a function that checks if a given string is a valid hexadecimal color.
//             d.Write a function that checks if a given number belongs to the interval from 1900
// to 2018.
// e.Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).

function isStringWrittenInAllCapitals(givenString) {
    var stringToUpperCase = givenString.toUpperCase();
    return givenString === stringToUpperCase
}
console.log(isStringWrittenInAllCapitals("ANeTA"))

function isStringContainDigits(givenString) {
    return /[0-9]/.test(givenString)
}
console.log(isStringContainDigits("ANETA1"))

function isStringValidHexadecimalColor(givenString) {
    return /^#([0-9a-f]{3}){1,2}$/i.test(givenString)
}
console.log(isStringValidHexadecimalColor("#FFFF00"))

function isGivenNumberBelongsToInterval(givenNumber) {
    return givenNumber >= 1900 && givenNumber <= 2018
}
console.log(isGivenNumberBelongsToInterval(1800))

function validator() {
    return {
        stringValidator: isStringWrittenInAllCapitals,
        passwordValidator: isStringContainDigits,
        colorValidator: isStringValidHexadecimalColor,
        yearValidator: isGivenNumberBelongsToInterval,
    }
}
console.log(validator().colorValidator("#FFFF00"))

// 8. Write a function that calculates a number of days to your birthday.

//     Input: 25 February
// Output: 5 days

var birthday = new Date(1985, 2, 3)
function calculateDaysToBirthday(birthday) {
    var currentDate = new Date()
    birthday.setFullYear(currentDate.getFullYear());
    var msPerDay = 24 * 60 * 60 * 1000;
    var daysLeft = (birthday.getTime() - currentDate.getTime()) / msPerDay;
    daysLeft = Math.round(daysLeft);
    return daysLeft
}
console.log(calculateDaysToBirthday(birthday))

// 9. Write a function that for a given departure and arrival time calculates the time the trip
// takes.
//     Input: 8: 22: 13 11: 43: 22
// Output: 3 hours 21 minutes 9 seconds

var departure = {
    hour: 8,
    minute: 22,
    second: 13
}
var arrival = {
    hour: 11,
    minute: 43,
    second: 22
}

function calculateFlightTime(departureTime, arrivalTime) {
    var obj = {
        hours: arrivalTime.hour - departureTime.hour,
        minutes: arrivalTime.minute - departureTime.minute,
        second: arrivalTime.second - departureTime.second
    }
    return obj.hours + " hours " + obj.minutes + " minutes " + obj.second + " seconds "
}
console.log(calculateFlightTime(departure, arrival))

// 10.
// a.Write a constructor function that creates points in space.Each point in space has
// its own x, y, and z coordinate.For example, (3, 5, 1) can be a point in space.
//     b.Write a function that calculates the distance between two points in the space.

function PointsInSpace(x, y, z) {
    this.x = x,
        this.y = y,
        this.z = z
}
var pointA = new PointsInSpace(1, 2, 3)
var pointB = new PointsInSpace(3, 5, 1)

function findDistance(object1, object2) {
    return {
        distanceX: Math.abs(object1.x - object2.x),
        distanceY: Math.abs(object1.y - object2.y),
        distanceZ: Math.abs(object1.z - object2.z)
    }
}
console.log(findDistance(pointA, pointB))

// 11.
// a.Write a function that generates a random integer value between 5 and 20.
// b.Write a function that generates a random integer value between 50 and 100.
// c.Write a function which expects a number and a callback generator function and
// returns an array of numbers produced by the generator function.

function generateRandomInteger(max, min) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min
    return random
}
console.log(generateRandomInteger(5, 20))

function generateArray(number, callBack) {
    var arr = []
    for (var i = 0; i < number; i++) {
        arr.push(callBack(5, 20))
    }
    return arr
}
console.log(generateArray(5, generateRandomInteger))
// 12. Write a function that shuffles the elements of a given array.

//     Input: [3, 6, 11, 2, 9, 1]

// Output: [6, 2, 9, 1, 3, 11](it can be any random permutation of the given array)

function shuffleElements(arr) {
    return arr.sort(function () {
        return Math.random() - 0.5
    })
}
console.log(shuffleElements([3, 6, 11, 2, 9, 1]))
