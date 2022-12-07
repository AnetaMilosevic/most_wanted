// 1. Write a function named tellFortune that:
// - takes 4 arguments: number of children, partner's name, geographic location, job title.
// - outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids.";
// Call that function 3 times with 3 different values for the arguments.

var children = [2, 3, 4, 5]
var parName = ["Nick", "Mike", "Tom", "Brad"]
var gLocation = ["Las Vegas", "Boston", "Denver", "Portland"]
var jTitle = ["Event planner", "Medical Assistant", "Housekeeper", "Physical Therapist"]


function tellFortune(NumberOfChildren, PartnersName, GeographicLocation, jobTitle){
    var result = "You will be a " + jobTitle[Math.floor(Math.random() * jobTitle.length)] 
    + " in " + GeographicLocation[Math.floor(Math.random() * GeographicLocation.length)]
    + "," + " and married to " + PartnersName[Math.floor(Math.random() * PartnersName.length)]
    + " with " + NumberOfChildren[Math.floor(Math.random() * NumberOfChildren.length)] + " kids"    

    return result
}
console.log(tellFortune(children, parName, gLocation, jTitle))

// 2. Write a function named calculateDogAge that:
// - takes 1 argument: your puppy's age.
// - calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// - outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
// years.


var humAge = 2
var dogAge = 14

function calculateDogAge (humanAge, puppyAge){
    var convertToDogAge = humanAge * 7
    var resultDogAge = "Your doggie is " + convertToDogAge + " years old in dog years!"
    console.log(resultDogAge)
    var convertToHumanAge = puppyAge / 7
    var resultHumanAge = "Your doggie is " + convertToHumanAge + " years old in human years!"
    console.log(resultHumanAge)
    return (resultDogAge, resultHumanAge)
}
calculateDogAge(humAge, dogAge)

// 3. Write a function named calculateSupply that:
// - takes 2 arguments: age, amount per day.
// - calculates the amount consumed for rest of the life (based on a constant max age).
// - outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amountPerDay){
    var maxAge = 85
    var amountToConsume = ((maxAge - age) * 365) * amountPerDay
    var rounded = amountToConsume.toFixed()
    var result = "You will need " + rounded + " to last you until the ripe old age of " + maxAge
    return result
}
console.log(calculateSupply(81, 0.35))

// 4. Create a function called celsiusToFahrenheit:
// - Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C";
// *NN is actual temperature you need to convert

var nn = 40

function celsiusToFahrenheit(temperatureInCelsius){
    var fahrenheit = (temperatureInCelsius * 9/5) + 32
    return temperatureInCelsius + " °C is " +  fahrenheit + " °F"
}
console.log(celsiusToFahrenheit(nn))

function fahrenheitToCelsius(temperatureInFahrenheit){
    var celsius = (temperatureInFahrenheit - 32) * 5/9
    return temperatureInFahrenheit + " °F is " +  celsius + " °C"
}
console.log(fahrenheitToCelsius(nn))

// 5. Create a function that validates a password to conform to the following rules:
// - Length between 6 and 24 characters,
// - At least one uppercase letter (A-Z).
// - At least one lowercase letter (a-z).
// - At least one digit (0-9).
// - Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
// - Supported special characters: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > . , .
// - Examples: validatePassword("P1zz@") ➞ false // Too short.
// - validatePassword("iLoveYou") ➞ false // Missing a number.
// - validatePassword("Fhg93@") ➞ true // OK!

function validatesPassword (password){
var digit = !!/[0-9]+/.test(password)
var specialCharacters = '! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " \' ? < > , .';
    for (var i = 0; i < password.length; i++){
        if (password[i] === password[(i + 1)] && password[i] === password[(i + 2)]){
            console.log("Password must not contain repetition of 3 characters in a row!")
            return
        }
        if(!specialCharacters.includes(password[i]) && !password[i].match(/[a-z]/i) && isNaN(parseInt(password[i]))) {
            console.log("Password contains unsupported characters!")
            return
        }
    }
    if (password.length < 6 || password.length > 24){
        console.log("Length must be between 6 and 24 characters!")
        return
    } 
    if (password === password.toLowerCase()){
        console.log("Password must contain at least one upper case letter!")
        return
    }
    if (password === password.toUpperCase()){
        console.log("Password must contain at least one lower case letter!")
        return
    }
    if (digit === false){
        console.log("Password must contain at least one number!")
    } else{
        console.log("Password is OK.")
    }
return 
}
validatesPassword("0kLLlpp0@")


// 6. Create a function that finds how many prime numbers there are, up to the given integer.
// Examples: primeNumbers(10) ➞ 4 // 2, 3, 5 and 7
// primeNumbers(20) ➞ 8 // 2, 3, 5, 7, 11, 13, 17 and 19
// primeNumbers(30) ➞ 10 // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29


function isPrimeNumber (num) {
    for (var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false
        } 
    }

    return true
}

function primeNumbers (givenNumber){
    var primeNumbers = []
    for (var i = 2; i < givenNumber; i++){
        if(isPrimeNumber(i)) {
            primeNumbers.push(i)
        }
    }

    return primeNumbers
}

console.log(primeNumbers(30))

// 7. Create a function that returns an array that expands by 1 from 1 to the value of the input, and then
// reduces back to 1. Items in the arrays will be the same as the length of the arrays.

// Examples:
// diamondArrays(1) ➞ [1],
// diamondArrays(2) ➞ [1, 2, 2, 1]
// diamondArrays(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]

function createDiamondArray (num) {
    var res = [];
        for(var i = 1; i <= num; i++) {
            for (var j = 1; j <= i; j++) {
                res.push(i);
            }
        }

        for(var i = num - 1; i >=1; i--) {
            for(var j = 1; j <= i; j++) {
                res.push(i)
            }
        }

    return res
}

console.log(createDiamondArray(5))