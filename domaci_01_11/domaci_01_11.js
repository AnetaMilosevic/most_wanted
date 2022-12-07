// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

var arrayA = [5, -4.2, 3, 7];
var e = 3
function isGivenElementInArray(givenArray, givenElement){
    var isItInArray = "No"
    for (var i = 0; i < givenArray.length; i++){
        if (givenArray[i] === givenElement){
            isItInArray = "Yes"
        } 
    }
    return isItInArray
}
console.log(isGivenElementInArray(arrayA, e))

// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

var array1 = [-3, 11, 5, 3.4, -8];

function multiplicationOfPositiveElements (givenArray1){
    for (var i = 0; i <givenArray1.length; i++){
        if (givenArray1[i] > 0){
        givenArray1[i] *= 2
        }
    }
    return givenArray1
}
console.log(multiplicationOfPositiveElements(array1))


// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var array2 = [4, 2, 2, -1, 6];

function findMinimum(givenArray2){
    var index = 0
    var min = givenArray2[0]
    for (var i = 0; i < givenArray2.length; i++){
        if (min > givenArray2[i]){
            min = givenArray2[i]
            index = i
        }
    }
    return [min, index]
}
console.log(findMinimum(array2))


// 4. Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2


var array4 = [4, 2, 2, -1, 6]

function findSecondSmallest (givenArray){
    return givenArray.sort()[1]
}
console.log(findSecondSmallest(array4))

// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

var array3 = [3, 11, -5, -3, 2]
function sumOfPositiveElements (givenArray3){
    var sum = 0
    for (var i = 0; i < givenArray3.length; i++){
        if (givenArray3[i] > 0){
            sum += givenArray3[i]
        }
    }
    return sum
}
console.log(sumOfPositiveElements(array3))

// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.

var array5 = [2, 4, -2, 7, -2, 4, 2]

function isArraySimetric (givenArray4){
    for (var i = 0; i < givenArray4.length; i++){
        if (givenArray4[i] === givenArray4[givenArray4.length - 1 - i]){
            return "The array is symmetric"
        } else {
            return "The array isn’t symmetric"
        }
    }
}
console.log(isArraySimetric(array5))
// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

firstArr = [4, 5, 6, 2]
secArr = [3, 8, 11, 9]

function intertwinesTwoArrays(givenArray1, givenArray2){
    newArr = []
    var indexF = 0
    var indexS = 1
    for (var i = 0; i < givenArray1.length; i++){
        newArr[indexF] = givenArray1[i];
        newArr[indexS] = givenArray2[i];
        indexF += 2;
        indexS += 2;
    }
    return newArr
}
    console.log(intertwinesTwoArrays(firstArr, secArr))

//     var e = []
//     var j = 0
//     for (let i = 0; i < givenArray1.length; i++){
//     e[j] = [givenArray1[i], givenArray2[i]];
//     j++
// }
// return e;
// }
// console.log(""+intertwinesTwoArrays([4, 5, 6, 2], [3, 8, 11, 9]));

// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var arr = [4, 5, 6, 2];
var arr1 = [3, 8, 11, 9];
function toConcatenatesTwoArrays(givenArray1, givenArray2){
   newArr = []
        newArr = [... givenArray1, ...givenArray2]   
        return newArr
}
console.log(toConcatenatesTwoArrays(arr, arr1))

// 9. Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

var array6 = [4, 6, 2, 8, 2, 2]
var del = 2
function deleteGivenElement (givenArray1, element){
    var newArray6 = []
    var j = 0
    for (var i = 0; i <givenArray1.length; i++){
        if (givenArray1[i] !== element){
            newArray6[j] = givenArray1[i];
            j++
        }
    }
    return newArray6
}
console.log(deleteGivenElement(array6, del))


// 10. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]
var array7 = [2, -2, 33, 12, 5, 8];
var inputE = 78;
var p = 0

function insertGivenElement (givenArray, element, position){
    var newArr = []
    for (var i = 0; i < givenArray.length; i++){
        if (position > i){
            newArr[i] = givenArray[i]
        } else if (position === i){
            newArr[i] = element
        } else if (position < i){
            newArr[i] = givenArray[i - 1]
        }
    }
    return newArr
}
console.log(insertGivenElement(array7, inputE, p))
