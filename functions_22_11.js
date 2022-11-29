// IIFE = Immediately Invoked Function Expressions
// 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

    var arr = [4, 5, 11, 9];
    {
   ( function replaceFirstAnLastElement (givenArr){
        var temp = givenArr[0];
        givenArr[0] = givenArr[givenArr.length - 1];
        givenArr[givenArr.length - 1] = temp;
        console.log(givenArr)
        return givenArr
    })(arr)
}
// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20
{ 
    (function calculateSurface (a, b){
        var surface = a * b 
        console.log(surface)
        return surface
    })(4, 5)
}


// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2

{
    (function(givenWord){
        var replacement = "*"
        var newWord = []
        var numberOfReplacements = 0
        for (var i = 0; i < givenWord.length; i++){
            if (givenWord[i] === "m" || givenWord[i] === "M"){
                newWord.push(replacement)
                numberOfReplacements++
            }
            else {
                newWord.push(givenWord[i])
            }
        }
        console.log(newWord.join(""), numberOfReplacements)
        return [newWord.join(""), numberOfReplacements]
    })("prograMming")
    }


// 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com
{
(function (name, surname){
    var email = name + "." + surname + "@gmail.com"
    console.log(email)
    return email
})("Pera", "Peric")
}

// 5. Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28


(function(input){
var oct_string = input.toString(8)
console.log(parseInt(oct_string, 8))
})(034)


// 6. Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!

function success(){
    console.log("Your password is cool!")
}
function fail(){
    console.log("Your password is invalid!")
}

function isPasswordValid(password, successCallback, errorCallback){
    var digit = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9];
    var counter = 0;
    var isPassOk = true;
    for (var i = 0; i < password.length; i++){
        if (password.length < 6){
            isPassOk = false
        }
    }
    for (var i = 0; i < password.length; i++){
        for (var j = 0; j < digit.length; j++){
        if (password[i] !== digit[j]){
            isPassOk = false
            counter++
        }
        }
    }
    if(isPassOk) {
        successCallback()
    } else {
        errorCallback()
    } 
    return isPassOk
}
console.log(isPasswordValid("JSGuru123", success, fail))

// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

function isNumberOdd(elem){
    if (elem % 2 !== 0){
        return true
    }
}
function filterElements(givenArr, isNumberOdd){
    var newArr = []
    for(var i = 0; i < givenArr.length; i++) {
        if(isNumberOdd(givenArr[i])) {
            newArr.push(givenArr[i])
        }
    }
    return newArr
}
console.log(filterElements([2, 8, 11, 4, 9, 3], isNumberOdd))


var x = 10
var y = 15
//var a = 0xA41
console.log(2 < 3 + 5)


