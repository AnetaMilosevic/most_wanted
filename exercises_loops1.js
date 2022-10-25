// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

var array1 = [5, -4.2, 3, 7];
var array2 = [5, -4.2, 18, 7];
var e = 3;
var isContain = "no" 

for (var i = 0; i <= array2.length; i++) {
    if (array2[i] === e) {
        isContain = "yes"
    }
}
console.log(isContain)


// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]
var a = [-3, 11, 5, 3.4, -8]
for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        a[i] *= 2
    }
}
console.log(a)


// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var array3 = [4, 2, 2, -1, 6]
var min = array3[0]
var index = 0

for (var i = 0; i < array3.length; i++){
    if (min > array3[i]){
        min = array3[i] 
        index = i 
    }
}
console.log("min je", min, "and index is", index)

// 4. Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2



// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

var array5 = [3, 11, -5, -3, 2]
var summ = 0
for (var i = 0; i < array5.length; i++) {
    if (array5[i] > 0)
        summ += array5[i]
}
console.log(summ)

// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.

//var array6 = [2, 4, -2, 7, -2, 4, 2]

var symArr = [2, 4, -2, 7, -2, 4, 2]
var isSym = "The array is symmetric"

for(var i = 0; i < symArr.length; i++) {
  if(symArr[i] === symArr[symArr[symArr.length - 1 - i]]) {
    isSym = "The array isn't symmetric"
  }
}
console.log(isSym)


// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

firstArr = [4, 5, 6, 2]
secArr = [3, 8, 11, 9]
newArr = []
var indexF = 0
var indexS = 1

for (var i = 0; i < firstArr.length; i++){
    newArr[indexF] = firstArr[i];
    newArr[indexS] = secArr[i];
    indexF += 2;
    indexS += 2
}
console.log(newArr)



// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var a = [4, 5, 6, 2]
var b = [3, 8, 11, 9]
var res = []
for (var i = 0; i < a.length; i++) {
    res[i] = a[i]
}
for (var i = 0; i < b.length; i++) {
    res[a.length + i] = b[i]
}
console.log(res)


// 9. Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

var array9 = [4, 6, 2, 8, 2, 2]
var del_e = 2

for (var i = 0; i < array9.length; i++) {
    if (array9[i] === del_e) {
        delete array9[i]
    }
}
console.log(array9)

// 10. Write a program that inserts a given element e on the given position p in the array a. If
//the value of the position is greater than the array length, print the error message.
//Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
//Output: [2, -2, 33, 78, 12, 5, 8]


var insertArr = [2, -2, 33, 12, 5, 8]
var elementE = 78
var p = 3
var newArr = []

for (var i = 0; i <= insertArr.length; i++) {
  if(p > insertArr.length) {
    console.log('error')
  } else if(i < p) {
    newArr[i] = insertArr[i]
  } else if(i === p) {
    newArr[i] = elementE
  } else if(i > p) {
    newArr[i] = insertArr[i - 1]
  } 
}

console.log("new arr", newArr)
