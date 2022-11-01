// 1. Write a function to check whether the `input` is a string or not.
// "My random string" --> true
// 12 --> false

function isItAString(imput) {

    if (typeof imput == "string") {
        return true
    }
    else if (typeof imput == "number") {
        return false
    }
}
console.log(isItAString("My random string"))

// 2. Write a function to check whether a string is blank or not.
// "My random string" --> false
// " " --> true
// 12 --> false
// false --> false

function isStringBlank(imput1) {
    if (typeof imput1 == "string" && imput1 === " ") {
        return true
    }
    else if (typeof imput1 == "string") {
        return false
    }
    else if (typeof imput1 == "number") {
        return false
    }
    else {
        return false
    }
}
console.log(isStringBlank(" "))

// 3. Write a function that concatenates a given string n times (default is 1).
// "Ha" --> "Ha"
// "Ha, 3 --> "HaHaHa"

var imputString = "Ha"
var numOfRep = 5

function concatenationOfString(stringToConcatenate, numOfConcatenation) {
    var result = ""
    for (var i = 0; i < numOfConcatenation; i++) {
        result += stringToConcatenate
    }
    return result
}
console.log(concatenationOfString(imputString, numOfRep))

// 4. Write a function to count the number of letter occurrences in a string.
// "My random string", "n" --> 2

function counOfLetterInString(givenString, letterToCount) {
    var counter = 0
    for (var i = 0; i < givenString.length; i++) {
        if (letterToCount === givenString[i].toLowerCase())
            counter++
    }
    return counter
}
console.log(counOfLetterInString("My random string N", "n"))


// 5. Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.

function toFindFirstOccurrenceOfCharacterInString(givenString1, character) {
    var characterIndex = -1
        for (var i = 0; i < givenString1.length; i++) {
            if (character === givenString1[i].toLowerCase()) {
                characterIndex = i
                break
            }
        }
        return characterIndex
    }
console.log(toFindFirstOccurrenceOfCharacterInString("AnEtaaneta", "e"))

// 6. Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.

function toFindLastOccurrenceOfCharacterInString(givenString1, character) {
    var characterIndex = -1
        for (var i = 0; i < givenString1.length; i++) {
            if (character === givenString1[i].toLowerCase()) {
                characterIndex = i
            }
        }
        return characterIndex
    }
console.log(toFindLastOccurrenceOfCharacterInString("AnEtaaneta", "e"))


// 7. Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.
// "My random string"--> ["M", "y", null, "r", "a"]
// "Random" --> ["R", "a", "n", "d", "o", "m"]


function convertStringIntoArray(givenString3) {
    var array = []
    for (var i = 0; i < givenString3.length; i++){
        if (givenString3[i] === " "){
            array[i] = null
        } else {
            array[i] = givenString3[i]
        }
    }
    return array
}
console.log(convertStringIntoArray("My random string"))

// 8. Write a function that accepts a number as a parameter and checks if the number is prime or
// not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

function isNumberPrime(numbToCheck) {
    if (typeof numbToCheck === "number" && 
        numbToCheck > 1 && 
        numbToCheck % numbToCheck === 0 && 
        numbToCheck % 2 !== 0) {
        return true
    }
        else {
        return false
    }
}
console.log(isNumberPrime(17))

// 9. Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.
// "My random string", "_", "My_random_string"
// "My random string", "+" --> "My+random+string"
// "My random string" --> "My-random-string"


var text = "My random string"
var sign = "_"

function replaceSpaceInString (givenString4, separator){
    var newString = ""
    var backUpSeprator = separator?separator: "-"
    for (var i = 0; i < givenString4.length; i++){
        if (givenString4[i] === " "){
            newString += backUpSeprator
        } else {
            newString += givenString4[i]
        }
    }
    return newString
}
console.log(replaceSpaceInString(text, sign))

//10. Write a function to get the first n characters and add “...” at the end of newly created string.

var char = "characters"
var ect = "..." 
var n = 5
function createString (word, addition, numberOfCaracters){
    var newString = ""
    for (var i=0; i < numberOfCaracters; i++){
        newString += word[i]
    }
    return newString + addition
}
console.log(createString(char, ect, n))

// 11. Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] --> [1, 21, 42, 1000]

var array1 = ["1", "21", undefined, "42", "1e+3", Infinity]
function filterNon_numericValuesOutOfArray (givenArray){
    var newArray = []
    for (var i = 0; i < givenArray.length; i++){
        if (parseInt(givenArray[i])){
            newArray[i] = parseInt(givenArray[i])
        }
    }
    return newArray
}
console.log(filterNon_numericValuesOutOfArray(array1))

//izgulglj kako da 1e+3 prkazes kao 1000

// 12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

var mR = 65;
var wR = 60
var year = 2022


function yearsLeftUntilRetirement (birthYear, gender){
    var calculator = year - birthYear
    var resultM = mR - calculator
    var resultW = wR - calculator
    if (calculator > 65){
        return "You are already retired"
    }
    else if(gender == "M"){
        return "you have " + resultM + " years until retirement"
    }
    else if(gender == "W"){
        return "you have " + resultW + " years until retirement"
    }    
}
console.log(yearsLeftUntilRetirement(1985, "W"))


// 13. Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 --> 1st
// 11 --> 11th

function humanizeNumber(givenNumber){
    var suf = "st";
    var suf1 = "nd";
    var suf2 = "rd";
    var suf3 = "th"
    for (var i = 0; i <= 10; i++){
        if (givenNumber === 1){
            return givenNumber + suf
        }
        else if (givenNumber === 2){
            return givenNumber + suf1
        }
        else if (givenNumber === 3){
            return givenNumber + suf2
        }
        else if (givenNumber === 0){
            return givenNumber
        }
        else{
            return givenNumber + suf3
        }
    }
}
console.log(humanizeNumber(3))