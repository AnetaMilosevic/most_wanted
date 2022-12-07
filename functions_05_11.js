// 1. Find the min and max element in the following array and switch their places. Print out the
// modified array in the console.
// Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

var arr = [3, 500, 12, 149, 53, 414, 1, 19];

function findMinimumAndMAximum (givenArr){
var min = 0
var max = 0
var minInd = 0
var maxInd = 0
var newArr = givenArr.slice(0, givenArr.length - 1).sort(function(a, b) {return a - b})
min = newArr[0]
max = newArr[newArr.length - 1]
minInd = givenArr.indexOf(min)
maxInd = givenArr.indexOf(max)

givenArr[minInd] = max
givenArr[maxInd] = min

return givenArr
}
console.log(findMinimumAndMAximum(arr))


// 2. Use the following array to make a new one by dividing its values by two and adding 5. If
// a given element's value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

var arr1 = [3, 500, -10, 149, 53, 414, 1, 19];

function makingNewArray (givenArr){
    var newArr = []
    for (var i = 0; i < givenArr.length; i++){
        newArr[i] = givenArr[i] / 2 + 5
        if (newArr[i] === 0){
            newArr[i] = 20
        }
    }
return newArr
}

console.log(makingNewArray(arr1))


// 3. Initialize two arrays. The first one should contain student names, the second one the
// number of points for each student. Display students' names with their corresponding
// grade. Use the following ranges:
// 51-60 --> 6,
// 61-70 --> 7,
// 71-80 --> 8,
// 81-90 --> 9,
// 91-100 --> 10.
// Input:
// ["Micahel", "Anne", "Frank", "Joe", "John" "David", "Mark", "Bill"] , [ 50, 39, 63, 72, 99,
// 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
// the exam.
var arrName = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var points = [50, 39, 63, 72, 99, 51, 83, 59]; 

function toCombineStudentNameAndGrade(name, points){
    var res = ''

    for(var i = 0; i < name.length; i++) {
        grade = 0
            if (points[i] <= 50){
                grade = "failed to complete the exam"
            } else if (points[i] > 50 && points[i] <= 60) {
                grade = "earned 6"
            } else if (points[i] > 60 && points[i] <= 70){
                grade = "earned 7"
            } else  if (points[i] > 70 && points[i] <= 80){
                grade = "earned 8"
            }else  if (points[i] > 80 && points[i] <= 90){
                grade = "earned 9"
            }else  if (points[i] > 90 && points[i] <= 100){
                grade = "earned 10"
            } else {
                "Points are out of range"
            }
        var text = name[i] + " aquired " +  points[i] + " and " + grade + ". "
        res += text
    }

    return res
}

console.log(toCombineStudentNameAndGrade(arrName, points)) 
// 4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose
// values are equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

var arr2 = [13, 11, 15, 5, 6, 1, 8, 12];

function sortArrayAndMultipleBy2 (givenArr){
    var newArr = []
    for (var i = 0; i < givenArr.length; i++){
        newArr[i] = givenArr[i] * 2
    }
    return newArr.sort(function(a, b){return a - b})
}
console.log(sortArrayAndMultipleBy2(arr2))

// 5. (skip :))Sort a previously defined array in a descending order and display it in the
// console.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

var arr3 = [13, 11, 15, 5, 6, 1, 8, 1];

function sortArrayInDescendingOrder(givenArr){
    newArr = givenArr.sort(function(a, b){return b - a})
    return newArr
}
console.log(sortArrayInDescendingOrder(arr3))


// 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
// subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
// be multiplied by 12.5 and displayed in console.
// Output: 2350000

var n = 1000
var nOdd = 500
function operationsWithArrayElemnts (numOfelements, numOfelementsOdd){
    var sum = 0;
    for (var i = 0; i <= numOfelements; i++){
        if (i % 2 === 0){
            sum += i
        }
        if (i % 2 !== 0 && i <= numOfelementsOdd){
            sum -= i
        }
     }
     sum *= 12.5;
     return sum
}
console.log(operationsWithArrayElemnts(n, nOdd))


// 7. Define a 10 element array. Take the first two letters from every string (that has at least 2
// letters) in the array and create a new string from them. Print it out in the console.
// Input: ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]

// Output: AnStJoJoDaMa

var arr4 = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];

function toMakeNewArrayFromPartsOfStrings (givenArr){
    var newString = ""
    for (var i = 0; i < givenArr.length; i++){
            if (typeof givenArr[i] === "string" && givenArr[i].length > 2){
                newString += givenArr[i].slice(0,2)
            }
        }
        return newString
    }

console.log(toMakeNewArrayFromPartsOfStrings(arr4))

// 8. Write a program that takes a string and prints its characters out in reversed order in the
// console.
// Input: Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

var str1 = "Belgrade Institute of Technology"

function reverseString(givenString){
var newString = givenString.split("").reverse().join("")
return newString
}
console.log(reverseString(str1))

// 9. Write a program that displays all the combinations of two numbers between 1 and 7.
// Don't display two of the same numbers at the same time. Display the number of possible
// combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

var range1 = 7
function combinationsOfNumbers(range){
    var newArr = []
    for (var i = 1 ; i <= range; i++){
        for(var j = range; j > 0  ; j--) {
            if(i !== j) {
                newArr.push("(" + i + ", " + j + ")")
            }
        }
    }
    return newArr
}

console.log(combinationsOfNumbers(range1))

// 10. Write a program that checks if the entered number is a prime number (i.e. divisible only
// by 1 and by itself).
// Input: 17 | 15
// Output: true | false

var num = 25

function isNumberPrime(givenNumber){
    var result = true
    for (var i = 2; i < givenNumber; i++)
    if (givenNumber % i === 0){
        result = false
    }
    return result
}
console.log(isNumberPrime(num))

// 11. Check if a given string is a palindrome (spaces are ignored).
// Input: eye | Geek | a nut for a jar of tuna
// Output: true | false | true

var str2 = "a nut for a jar of tuna"

function isStringPolindrom(givenString){
    var arr = givenString.replaceAll(" ", "")
    var isFalse = true
    for (var i = 0; i < arr.length; i++){
        if (arr[i] !== arr[arr.length - i - 1]){
            isFalse = false
        }
    }
    return isFalse
}
console.log(isStringPolindrom(str2))

// 12. Write a program that calculates the greatest common divisor of two integers. Note: The
// greatest common divisor of two non-zero integers is the greatest positive number that
// divides both numbers with no remainder.
// Input: 192 42 | 81 9
// Output: 6 | 9

function gratestCommonDivisor (givenNumber, givenNumber1){
    var upTo = givenNumber < givenNumber1 ? givenNumber : givenNumber1
    var nzd = 0
    for (var i = 1; i <= upTo; i++){
        if (givenNumber % i === 0 && givenNumber1 % i === 0 ) {
            nzd = i
        }
    }

    return nzd
}

console.log(gratestCommonDivisor(81, 9))