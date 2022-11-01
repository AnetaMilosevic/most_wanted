// Try to solve all assignments on a separate branch of bit-pp repository. Don’t forget to first pull
// changes done at class and push the new repository to remote when done with all the work at the end.
// Ignore this if git branching is not presented to you yet.

// 1. Write a program to insert a string within a string at a particular position (default is 1,
// beginning of a string).
// "My random string", "JS", -->"JS My random string"
// "My random string", "JS", 10 --> "My random JS string" PositionToInsert

function insertStringWithinString (givenString, lokation, textToInsert){
    var newString = ""
    for (var i = 0; i < givenString.length + textToInsert.length; i++){
        if (i < lokation - 1){
            newString += givenString[i]
        } else if (i === lokation - 1){
            newString += textToInsert
        } else {
            newString += givenString[i - textToInsert.length]
        }
    }
    return newString
}
console.log(insertStringWithinString("My random string", 10, " JS "))



// 2. Write a program to join all elements of the array into a string skipping elements that are
// undefined, null, NaN or Infinity.
// [NaN, 0, 15, false, -22, "", undefined, 47, null]

var array = [NaN, 0, 15, false, -22, "", undefined, 47, null]
function filterArrayElements (givenArray){
    var newString = ""
    for (var i = 0; i < givenArray.length; i++){
        if (typeof givenArray[i] === "number" && !isNaN(givenArray[i])){
            newString += givenArray[i] += ", "
        }
    }
    return newString
}
console.log(filterArrayElements(array))

// 3. Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, "", undefined, 47, null] --> [15, -22, 47]

var array1 = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function toFilterFalsyValus (givenValue){
    var newArray= []
    for (var i = 0; i < givenValue.length; i++){
        if (givenValue[i]){
            newArray.push(givenValue[i])
        }
    }
    return newArray
}
console.log(toFilterFalsyValus(array1))

// 4. Write a function that reverses a number. The result must be a number.
// 12345 --> 54321 // Output must be a number
var numb = 12345
function reverseNumber (givenNumber){
    var str = givenNumber.toString()
    var newStr = str.split('').reverse().join("")
    return parseInt(newStr)
}

console.log(reverseNumber(numb))

// 5. Write a function to get the last element of an array. Passing a parameter "n" will return the
// last "n" elements of the array.
// [7, 9, 0, -2] --> -2
// [7, 9, 0, -2], 2 --> [0, -2]

var array3 =[7, 9, 0, -2]
var n = 2
function toFindLastOccurrenceOfCharacterInString(givenArray, numberOfElements) {
    var loopStarts = numberOfElements ? givenArray.length - numberOfElements : givenArray.length - 1
    var newArr = []
        for (var i = loopStarts; i < givenArray.length; i++) {
            newArr.push(givenArray[i])
        }
        return newArr
    }
console.log(toFindLastOccurrenceOfCharacterInString(array3, n))


// 6. Write a function to create a specified number of elements with pre-filled numeric value
// array.
// 6, 0 --> [0, 0, 0, 0, 0, 0]
// 2, "none" --> ["none", "none"]
// 2 --> [null, null]


var n = 2
var elemEnt = "none"
function createNumberOfelements(numOfElements, element){
    newArray = []
    for (var i = 0; i < numOfElements; i++){
        if(element) {
            newArray[i] = element
        } else {
            newArray[i] = null
        }
        // element ?  newArray[i] = element : newArray[i] = null
    }
    return newArray
}

console.log(createNumberOfelements(n))

// 7. Write a function that says whether a number is perfect.
// 28 --> 28 is a perfect number.
// Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
// of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
// as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
// (including itself).
// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
// Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
// perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function isPerfect(num) {
    var sum = 0
    for(var i = 0; i < num; i++) {
        if(num  % i === 0) {
            sum += i
        }
    }
    return sum && sum === num ? true : false
}

console.log(isPerfect(8124))

// 8. Write a function to find a word within a string.
// "The quick brown fox", "fox" --> "fox" was found 1 times"
// , "aa" --> ""aa" was found 2 times"

var string1 = "The quick brown fox"
var word = "fox"

function toFindWordWithinString (givenString1, wordToFind){
    var stringToArray = givenString1.split(" ");
    var counter = 0
    for (var i = 0; i < givenString1.length; i++){
        if(stringToArray[i] === wordToFind){
            counter ++
        } 
    }
    return word + " was found " + counter + " times"
}
console.log(toFindWordWithinString(string1, word))

// 9. Write a function to hide email address.
// "myemailaddress@bgit.rs" --> "mye...@bgit.rs"

function hideAddress(address) {
    var splitted = address.split('@')
    var firstPart = ""
    var secondPart = splitted[1]

    for(var i = 0; i < 3; i++) {
        firstPart += splitted[0][i]
    }
    return firstPart + '...' + "@" + secondPart
}

console.log(hideAddress("myemailaddress@bgit.rs"))


// 10. Write a program to find the most frequent item of an array.
// [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]
var array2 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]

function findMostFrequentItem(givenArray){
    var mostFrequent = 1
    var m = 0
    var item;
    for (var i = 0; i < givenArray.length; i++){
        for (var j = i; j <givenArray.length; j++){
            if (givenArray[i] == givenArray[j]){
                 m++
            }
            if (mostFrequent < m){
                mostFrequent = m;
                item = givenArray[i]
            }
        }
        m = 0;
        }
        return item
}
console.log(findMostFrequentItem(array2))
