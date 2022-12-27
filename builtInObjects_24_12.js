// Try to solve all assignments on a separate branch.Keep in mind that you should try to use built -in
//     objects and their methods, solo or combined.You should use loops only for the 4 and 9

// assignment, all others can be solved using built -in object methods.

// 1. Write a JavaScript function that reverses a number.typeof result of the function should
// be “number”.
// 12345 -> 54321

var numb = 12345
function reversedNum(num) {
    var result =
        parseFloat(
            num.toString().split('').reverse().join(''))
    return result
}
console.log(reversedNum(numb))
console.log(typeof reversedNum(numb))


// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
//     Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -> “abeemrstw”


function putStringInAlphabeticOrder(givenString) {
    var result = givenString.toLowerCase().split('').sort().join('')
    return result
}
console.log(putStringInAlphabeticOrder("Webmaster"))




// 3. Write a function to alphabetize words of a given string.Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.
// "Republic Of Serbia" -> "Rbceilpu Of Sabeir"

function toAlphabetizeString(givenString) {
    var splitted = givenString.split(" ")
    var result1 = []
    for (var i = 0; i < splitted.length; i++) {
        result1.push(splitted[i].split('').sort().join(''))
    }
    return result1

}
console.log(toAlphabetizeString("Republic Of Serbia"))



// 4. Write a function to split a string and convert it into an array of words.
// "John Snow" ["John", "Snow"]

function convertStringIntoArrayOfWords(givenString) {
    var result = givenString.split(" ")
    return result
}
console.log(convertStringIntoArrayOfWords("John Snow"))

// 5. Write a function to convert a string to its abbreviated form.
// "John Snow" -> "John S."

function convertStringIntoAbbreviatedForm(givenString) {
    var splitted = convertStringIntoArrayOfWords(givenString)
    if (splitted.length > 1) {
        return (splitted[0] + " " + splitted[1].charAt(0) + ".");
    }
    return splitted[0];
}
console.log(convertStringIntoAbbreviatedForm("John Snow"))

// 6. Write a function that adds string to the left or right of string, by replacing it’s characters.
// "0000", "123", "l" -> "0123"
// "00000000", "123", "r" -> "12300000"

function addStringByReplacingItsElements(givenString, givenString1, side) {
    var newString = ""
    var index = givenString1.length
    if (side == "l") {
        newString = givenString.slice(index);
        var result = newString.concat(givenString1)
    }
    if (side == "r") {
        newString = givenString.slice(index);
        var result = givenString1.concat(newString)
    }
    return result
}
console.log(addStringByReplacingItsElements("00000000", "123", "r"))


// 7. Write a function to capitalize the first letter of a string and returns modified string.
// "js string exercises" -> "Js string exercises"

function capitalizeFirstLetter(givenString) {
    var firstLetter = givenString[0].toUpperCase();
    var restOfLetters = givenString.slice(1);
    var result = firstLetter.concat(restOfLetters)
    return result

}
console.log(capitalizeFirstLetter("js string exercises"))

// 8. Write a function to hide email addresses to protect them from unauthorized users.
// "somerandomaddress @example.com" -> "somerand...@example.com"

function hidePartOfEmailAddress(email) {
    var split = email.split(" ")
    var dots = "..."
    var split1 = split[0]
    var index = split1.length / 2
    split1 = split1.slice(0, index)
    var result = split1 + dots + split[1]
    return result
}
console.log(hidePartOfEmailAddress("somerandomaddress @example.com"))
// 9. Write a program that accepts a string as input and swaps the case of each character.For
// example, if you input "The Quick Brown Fox", the output should be "tHE qUICK bROWN fOX".
// var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var LOWER = "abcdefghijklmnopqrstuvwxyz";
// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

function swapCharacterToUpperOrLowerCase(givenString) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var result = [];
    for (var i = 0; i < givenString.length; i++) {
        if (upper.includes(givenString[i])) {
            result.push(givenString[i].toLowerCase())
        } else if (lower.includes(givenString[i])) {
            result.push(givenString[i].toUpperCase())
        } else {
            result.push(givenString[i])
        }
    }
    return result.join("")
}
console.log(swapCharacterToUpperOrLowerCase("The Quick Brown Fox"))