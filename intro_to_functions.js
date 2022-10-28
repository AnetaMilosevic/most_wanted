// 1. Write a program that calculates the maximum of two given numbers.

function getMax(a, b) {
    // var max = 0
    if (a > b) {
        // max = a
        return a
    } else if (b > a) {
        // max = b
        return b
    }
    // return max
}
console.log(getMax(3, 9))

// 2. Write a program that checks if a given number is odd.

function isNumberOdd(a) {
    if (a % 2 !== 0) {
       return true
    } else { 
        return false
    }
    // return a % 2 !== 0 ? true : false
    // var c = a % 2 !== 0 ? true : false
    // return c
}
console.log(isNumberOdd(2))

// 3. Write a program that checks if a given number is a three digit long number.


function isNumberThreeDdigitLong (num) {
    if (num >= 100 && num <= 999) {
        return true
    } else {
        return false
    }
}
console.log(isNumberThreeDdigitLong(556))

// 4. Write a program that calculates an arithmetic mean of four numbers.

function arithmetic_mean(a) {
    var sum = 0
    for (var i = 0; i < a.length; i++) {
        sum += a[i]
    }
    return sum / a.length
}

console.log(arithmetic_mean([1, 2, 3, 4]))

// 5. Write a program that draws a square of a given size. For example, if the size of square
// is 5 the program should draw:
// *****
// * *
// * *
// * *
// *****



// 6. Write a program that draws a horizontal chart representing three given values. For
// example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

var value1 = 5
var value2 = 3
var value3 = 7
var asterisk = "*"

function numbToAsterisk (givenValue, givenValue1, givenValue2, draws){
    var result1 = ""
    var result2 = ""
    var result7 = ""
    for (i = 0; i < givenValue; i++){
        result1 += draws
    } 
    for (j = 0; j < givenValue1; j++){
        result2 += draws 
    }
    for (k = 0; k < givenValue2; k++){
        result7 += draws
    }
    console.log(result1)
    console.log(result2)
    console.log(result7)
}
numbToAsterisk(value1, value2, value3, asterisk)

// 7. Write a program that calculates a number of digits of a given number.

var num = 23458890
var d = num.toString()

function numberOfDigits (d){
for (i = 0; i < d.length; i++){
    return d.length
}
}
console.log(numberOfDigits(d))

// 8. Write a program that calculates a number of appearances of a given number in a given
// array.
//Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
//Result: 3

var arrayA = [2, 4, 7, 8, 7, 7, 1];

var e = 7

function numbOfAppearInArray(givenArr, givenNo){
    var counter = 0
    for (var i = 0; i < givenArr.length; i++){
        if (givenNo === givenArr[i]){
            counter++
        }
    } 
    return counter
}

console.log(numbOfAppearInArray(arrayA, e))

// 9. Write a program that calculates the sum of odd elements of a given array.

var oddArray = [1, 2, 3, 4, 5]

function sumOfOddElements (arr){
    suma = 0
    for (i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0) {
            suma += arr[i]
        }
    }
    return suma
}
console.log(sumOfOddElements(oddArray))


// 10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.

var word = "Aneta"
var l = "a"

function numOfappearanceOfletterInString (stringToCheck, letter){
    var counter1 = 0
    for (i = 0; i < stringToCheck.length; i++){
        if (letter === stringToCheck[i].toLowerCase()){
        counter1++
        }
    }
    return counter1
}
console.log(numOfappearanceOfletterInString(word, l))

// 11. Write a program that concatenates a given string given number of times. For example, if
// “abc” and 4 are given values, the program prints out abcabcabcabc.

var text = "abc"
var br = 4

function concatenatesText(textToConc, numOfConc) {
    var newText = ''
    for (i = 0; i < numOfConc; i++){
        newText += textToConc
    }

    return newText
}

console.log(concatenatesText(text, br))

