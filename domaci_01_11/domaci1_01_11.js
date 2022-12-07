// 1. Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.
// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]

var arr = ["1", "21", undefined, "42", "1e+3", Infinity];

function convertArrayOfStringIntoArrayOfNumbers(array){
    var newArr = []
    for (var i = 0; i < array.length; i++){
        if (array[i] && isFinite(array[i])){
            newArr.push(parseFloat(array[i]))
        }
    }
    return newArr
}
console.log(convertArrayOfStringIntoArrayOfNumbers(arr))

// 2. Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.
// Input: [NaN, 0, 15, false, -22,"", undefined, 47, null]
// Output: "015false-2247"

var arr2 = [NaN, 0, 15, false, -22, "", undefined, 47, null]

function arrToString(arr) {
    var str = ''
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] !== undefined && arr[i] !== null && !isNaN(arr[i]) && isFinite(arr[i])) {
            str += arr[i]
        }
    }
    return str
}

console.log(arrToString(arr2))

// 3. Write a program to filter out falsy values from the array.
// Input: [NaN, 0, 15, false, -22,"", undefined, 47, null]
// Output: [15, -22, 47]

var arr3 = [NaN, 0, 15, false, -22,"", undefined, 47, null]

function falsyRemover(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(falsyRemover(arr3))

// 4. Write a program that calculates a number of integer values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
// Output: 3

var arr4 = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]

function sumOfIntegerValues(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] && arr[i] % 1 === 0) {
            sum ++
        }
    }
    return sum
}

console.log(sumOfIntegerValues(arr4))

// 5. Write a program that calculates a number of float values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
// Output: 2

var arr5 = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]

function sumOfFloatValues(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] && arr[i] % 1 !== 0) {
            sum ++
        }
    }
    return sum
}
console.log(sumOfFloatValues(arr5))