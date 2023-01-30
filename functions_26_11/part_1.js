// INSTRUCTIONS: All tasks needs to be done as regular function and after that as anonymous function!!!
    
//     1. Write a function that checks if a given string contains 5 digits.
// Input: “1b8952abd” 
// Output: true
//     1A. Modify previous task to check if it contains char or number "5". 
// Input: “1bser9re”
// Output: false

var str = "klkp12345kabd"
var str12 = "1bser9re"

function isStringContainDigits(givenString, givenNumber){
    var check = true
    var counter = 0
    for (var i = 0; i < givenString.length; i++){
        if (/[0-9]/.test(givenString[i])){
            counter ++
        }
    }
    if (counter !== givenNumber){
        check = false
    }
    return check
}
console.log(isStringContainDigits(str, 5))


var isStringContainDigits2 = function (givenString, givenNumber){
    var check = true
    var counter = 0
    for (var i = 0; i < givenString.length; i++){
        if (/[0-9]/.test(givenString[i])){
            counter ++
        }
    }
    if (counter !== givenNumber){
        check = false
    }
    return check
}
console.log(isStringContainDigits2(str12, 5))

//     2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

var str1 = "Programming in JS is super interesting!"
var newStr1 = "JS"

function replaceString(givenString, strToReplace){
    var word = givenString.split(" ")
    var replacement = "**"
    for (var i = 0; i < givenString.length; i++){
    if (word[i] === strToReplace){
    word[i] = replacement
    }
}
return word.join(" ")
}
console.log(replaceString(str1, newStr1))



var replacestring1 = function(givenString, strToReplace){
    var word = givenString.split(" ")
    var replacement = "**"
    for (var i = 0; i < givenString.length; i++){
    if (word[i] === strToReplace){
    word[i] = replacement
    }
}
return word.join(" ")
}
console.log(replacestring1(str1, newStr1))

//     3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’ 
// Output: “Good morning” 

var str2 = "Goo morning";
var position = 4;
var character = "d";

function insertGivenCharacter(givenString, givenPosition, givenCharacter){
    var splitted = givenString.split("");
    var position1 = givenPosition - 1;
    splitted.splice(position1, 0, givenCharacter);
    return splitted.join("")
}
console.log(insertGivenCharacter(str2, position, character))


var insertGivenCharacter1 = function(givenString, givenPosition, givenCharacter){
    var splitted = givenString.split("");
    var position1 = givenPosition - 1;
    splitted.splice(position1, 0, givenCharacter);
    return splitted.join("")
}
console.log(insertGivenCharacter1(str2, position, character))

//     4. Write a function that deletes a character from the given position in the string. 
// Input: “Goodd morning!”, 3 
// Output: “Good morning!” 

var str2 = "Goodd morning";
var position = 3;

function deleteGivenCharacter(givenString, givenPosition){
    var splitted = givenString.split("");
    splitted.splice(givenPosition, 1);
    return splitted.join("");
}
console.log(deleteGivenCharacter(str2, position))

var deleteGivenCharacter1 = function(givenString, givenPosition){
    var splitted = givenString.split("");
    splitted.splice(givenPosition, 1);
    return splitted.join("");
}
console.log(deleteGivenCharacter1(str2, position))
 
//     5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]

var arr = [3, 5, 1, 8, 90, -4, 23, 1, 67]
var arr1 = [3, 5, 1, 8, 90, -4, 23, 1, 67]

function deleteEveryNElement(givenArr, n) {
    var counter = 0;
    for (var i = 0; i < givenArr.length; i++){
        if ((i + 1) % n !== 0){
        givenArr[counter] = givenArr[i]
        counter++
    }
    }
    givenArr.length = counter;
    return givenArr;
  }
  console.log(deleteEveryNElement(arr, 2))



var deleteElements = function(givenArr1, n1) {
    var counter = 0;
    for (var i = 0; i < givenArr1.length; i++) {
        if ((i + 1) % n1 !== 0){
        givenArr1[counter] = givenArr1[i]
        counter++
    }
    }
    givenArr1.length = counter;
    return givenArr1;
  }
  console.log(deleteElements (arr1, 2))
