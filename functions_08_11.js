// 1. Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

var arr = [1,2,3,4,5,6]
var k = 2

function toRotateElements(givenArr, kElement){
    var newArr = []
    for (var i = kElement; i < givenArr.length; i++){
            newArr.push(givenArr[i])
    }
    for (var i = 0; i < kElement; i++){
        newArr.push(givenArr[i])
    }
    return newArr
}
console.log(toRotateElements(arr, k))

// 2. Write a function that takes a number and returns array of its digits.

var d = 111


function turnDigitIntoArray(digit){
   
    return digit.toString().split("").map(elem => parseInt(elem))
}
console.log(turnDigitIntoArray(d))

// 3. Write a program that prints a multiplication table for numbers up to 12.

var num = 7

function multiplicationTable(givenNumber){
    for (var i = 1; i <= 12; i++){
        console.log(givenNumber + " * " + i + " = " + givenNumber * i)
    }
}
multiplicationTable(num)

// 4. Write a function to find the maximum element in array of numbers. Filter out all non-number
// elements.

var arr1 = [NaN, 15, 2, 456, "", NaN, Infinity, 999]

function onlyNumbers(givenArr){
    var newArr = []
    for (var i = 0; i < givenArr.length; i++){
        if (typeof givenArr[i] === "number" && !Number.isNaN(givenArr[i]) && isFinite(givenArr[i])){
            newArr.push(givenArr[i])
        }
    }
return newArr
}
console.log(onlyNumbers(arr1))

function findMaxAndFilterNon_numberElements(givenArr){
var onlyNumbersOfGivenarr = onlyNumbers(givenArr)

    for (var i = 0; i < givenArr.length; i++){
        return Math.max(...onlyNumbersOfGivenarr)
    }
}
console.log(findMaxAndFilterNon_numberElements(arr1))


// 5. Napisati funkciju koja vraca najveci I najmanji element niza. Rezultat prikazati kao niz.

var arr2 = [12, 20, -1, 33, 14]

function findMaxAndMin (givenArr){
    var max = 0;
    var min = 0;
    var newArr = []
    max = Math.max(...givenArr);
    min = Math.min(...givenArr);
    newArr.push(max, min)
    return newArr
}
console.log(findMaxAndMin(arr2))

// 6. Napisati funkciju koja vraća medijanu niza. (Medijana je “srednji” broj niza kada su brojevi
// poređani od najmanjeg do najvećeg ako niz ima neparan broj elemenata. Ako ima paran
// broj onda se medijana definiše kao aritmetička sredina dve srednje vrednosti).

var arr3 = [6, 5, 3, 4, 2, 7]

function medianOfArray (givenArr){
    var sortedArr = givenArr.sort(function(a, b){return a-b});
    console.log(sortedArr);
    result = 0
        if (givenArr.length % 2 !== 0){
            result = sortedArr[Math.floor(sortedArr.length / 2)]
        } else if (givenArr.length % 2 === 0){
            result = ((sortedArr[(sortedArr.length / 2) - 1]) + (sortedArr[sortedArr.length / 2])) / 2
        }
    return result
}
console.log(medianOfArray(arr3))


// 7. Write a function to find and return the first, middle and last element of an array if the array
// has odd number of elements. If number of elements is even, return just the first and the
// last. In other cases (empty array), input array should be returned.

var arr4 = [3, 4, 5, 6, 7]

function elementsOfArray (givenArr){
var resultFirst = givenArr[0]
var resultMiddle = givenArr[Math.floor(givenArr.length / 2)]
var resultLast = givenArr[givenArr.length - 1]

    if (givenArr.length % 2 !== 0){
        console.log(resultFirst, resultMiddle, resultLast)
    } else if ( givenArr.length % 2 === 0){
        console.log(resultFirst, resultLast)
    } else {
        console.log(givenArr)
    }
    return
}
elementsOfArray(arr4)

// 8. Write a function to find the average of N elements. Make the function flexible to receive
// dynamic number or parameters.


function findAverage(){
    var result = 0
    for (var i = 0; i < arguments.length; i++){
        result += arguments[i] / arguments.length
    }
        return result
}
console.log(findAverage(2, 2, 4, 4))


// 9. Write a function to find all the numbers greater than the average.

var arr5 = [1, 2 ,3, 4, 5]

function findNumberGreaterThanAverage(givenArr){
    var average = 0
    var newArr = []
    for (var i = 0; i < givenArr.length; i++){
        average +=givenArr[i] / 2
        if (average > givenArr[i]){
            newArr.push(givenArr[i])
        }
    }
    return newArr
}
console.log(findNumberGreaterThanAverage(arr5))

// 10. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
// square of the height (in meters). Write a function that takes two parameters, weight and
// height, computes the BMI, and prints the corresponding BMI category:
//  Starvation: less than 15
//  Anorexic: less than 17.5
//  Underweight: less than 18.5
//  Ideal: greater than or equal to 18.5 but less than 25
//  Overweight: greater than or equal to 25 but less than 30
//  Obese: greater than or equal to 30 but less than 40
//  Morbidly obese: greater than or equal to 40

var w = 105
var h = 1.83

function toCalculateBmi (weight, height){
    var squareHeight = height * height
    var bmi = weight / squareHeight
    var result = ""
    if (bmi < 15){
        result = "Starvation"
    } else if (bmi > 15 && bmi < 17.5){
        result = "Anorexic"
    } else if (bmi < 18.5){
        result = "Underweight"
    } else if (bmi >= 18.5 && bmi < 25){
        result = "Ideal"
    } else if (bmi >= 25 && bmi < 30){
        result = "Overweight"
    } else if (bmi >= 30 && bmi < 40){
        result = "Obese"
    } else if (bmi >= 40){
        result = "Morbidly obese"
    }
    return result
}
console.log(toCalculateBmi(w, h))

// 11. Write a function that takes a list of strings and prints them, one per line, in a rectangular
// frame.:
// For example the list ["Hello", "World", "in", "a", "frame&"] gets
// printed as:
// *********
// * Hello *
// * World *
// * in *
// * a *
// * frame *
// *********

var arr5 = ["Hello", "World", "in", "a", "frame"]

function writingInRectangularShape (givenArray) {
    var longestWord = 0
    var starLine = ""
    for(var i = 0; i< givenArray.length; i++) {
        if(givenArray[i].length > longestWord) {
            longestWord = givenArray[i].length
        }
    }
    
    var starLineLength = longestWord + 4 
    for(var i = 0; i < starLineLength; i++) {
        starLine += "*"
    }

    var words = ''
    for(var i = 0; i < givenArray.length; i++) {
        words += "* " + givenArray[i] + " *\n"
    }

    console.log(starLine + "\n" + words + starLine)
}

writingInRectangularShape(arr5)