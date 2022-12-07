//1. Write a code to find the sum of first 10 natural numbers and show that sum on screen.

var n = 10
var sum = 0

for (var index = 0; index <= n; index++){
    
    sum += index
}
console.log(sum)


//2. Write a code to display the cube of the number up to given an integer and show it on screen. Example: 2 up to cube equals 8.


var x = 4
var cube = 1

for (var i = 0; i < 2; i++) {
    cube *= x
}
console.log(cube)



//3. Write a code to calculate the factorial of a given number and show it on screen. Example: The Factorial of 5 is 120.

var facNum = 5
var result = 1

for (var index = 1; index <= facNum; index++){
    result *= index
}
console.log(result)



//4. Write a code to display the n terms of even natural number and their sum.
//Example:
//Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".

var n_terms = 5
var even = ""
var sum = 0

for (var i = 1; i <= n_terms; i++){
     sum +=2*i
     even +=2*i
     if (i % 2 === 0){
     even += ""}
}
console.log("The even numbers are", even, "Their sum is", sum)


//5.Write a code to calculate the sum of digits in a number and show that sum on screen. Example: "Sum of digits in number 232 is 7".

 var digit = [2, 3, 2];
 var digit_summ = 0

for (var i = 0; i < digit.length; i++){
    digit_summ += digit[i];
}
console.log("Sum of digits in number", digit, "is", digit_summ)

//6. Write a code to count all letters in a word and show that count on screen. Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".

var word = "Eclip542se";
var newWord = word.length
var word_sum = 1

for (var i = 0; i < word.length; i++){
    if (word[i] == "0" || word[i] == "1"){
        newWord = word[i]
    }
    else if (word[i] == "2" || word[i] == "3"){
        newWrd = word[i]
    }
}
console.log(newWord)

//7. Write a code to find on which index in array is letter "C" and show that index on screen. Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].

var arr = [1, 3, 32, "$", "g", "h", "t", "s", "c", 66, 23, "h2"];

for (var i = 0; i < arr.length; i++){
     if (arr[i] === "c" || arr[i] === "C"){
        console.log(i)
     }
}