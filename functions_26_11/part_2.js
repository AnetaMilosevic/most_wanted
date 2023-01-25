// INSTRUCTIONS: All tasks needs to be done as regular function and after that as anonymous function!!!

//    6. Write a function that replaces the elements of the given array between two positions with their doubled values. 
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]

var arr = [3, 5, 1, 8, 90, -4, 23, 1, 67];
var pos1 = 2
var pos2 = 6

function replaceElementsBetweenTwoPositions(givenArr, position1, position2) {
    for (var i = 0; i < givenArr.length; i++) {
        if (i >= position1 && i <= position2) {
            givenArr[i] = givenArr[i] * 2
        }
    }
    return givenArr
}
console.log(replaceElementsBetweenTwoPositions(arr, pos1, pos2))

//     7. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true

function isEveryElementOfTheFirstArrayContainedInSecond(arr1, arr2) {
    result = false
    if (arr1.every((elem) => arr2.indexOf(elem) != -1)) {
        result = true
    } else {
        result = false
    }
    return result
}
console.log(isEveryElementOfTheFirstArrayContainedInSecond([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]))


//     8. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
// Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]

var arr1 = ["apple", "tea", "amazing", "morning", "JavaScript"]

function checkNumberOfAppearance(givenArr) {
    var numbA = givenArr.sort((a, b) => a.split("").filter(elem2 => elem2 === "a") - b.split("").filter(elem2 => elem2 === "a"))
    return numbA
}
console.log("" + checkNumberOfAppearance(arr1))


//     9. Write a function that prints out the date of the next day. 
// Output:  25. 10. 2018. 


var today = new Date();
function nextDay(today) {
    var tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    return tomorrow;
}
console.log(nextDay(today))


//     10. Write a function that prints out the date of the previous day.
// Output:  23. 10. 2018.

function previousDay(today) {
    var yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    return yesterday;
}
console.log(previousDay(today))




//     11. Write a function that prints out an array of the numbers aligned from the right side.
// Input: [78, 111, 4, 4321]
// Output:
//   78
//  111
//    4
// 4321

var arr2 = [78, 111, 4, 4321];

function maximumLength(givenArr) {
    var max = Math.max(...givenArr)
    return max.toString().split("").length
}

function toAlignFromRightSide(givenArr) {
    var maxLength = maximumLength(givenArr)
    var result = ""
    for (var i = 0; i < givenArr.length; i++) {
        var currentLength = givenArr[i].toString().split("").length
        if (currentLength < maxLength) {
            var numberOfEmptySpaces = maxLength - currentLength
            var blankRepeater = " ".repeat(numberOfEmptySpaces)
            result += blankRepeater + givenArr[i] + "\n"
        } else {
            result += givenArr[i] + "\n"
        }
    }
    return result
}
console.log(toAlignFromRightSide(arr2))