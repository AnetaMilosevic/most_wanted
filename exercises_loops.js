//1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
//number is odd or even, and display a message to the screen.

var number = 15

for (var i = 0; i <= number; i++){
    if (i % 2 === 0){
        console.log(i + " is even")
    }
    else{
        console.log(i + " is odd")
    }
}

//2. 
//Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);

//3. Write a program that will iterate from 0 to 10 and display squares of numbers.

for (var i = 0; i<=10; i++){
    console.log(i * i)
}

//4. Write a program to compute the sum and product of an array of integers.

var niz = [1, 2, 3, 4, 5];
var summ = 0;
var product = 1;

for (var i = 0; i < niz.length; i++){
    summ += niz[i];
    product *= niz[i];
}
console.log("The sum of array is " + summ + " and " + "the product is " + product)



//5. Write a program which prints the elements of the following array as a single string.
//var x = [&#39;1&#39;, &#39;A&#39;, &#39;B&#39;, &quot;c&quot;, &quot;r&quot;, true, NaN, undefined];

var y = ["1", "A", "B", "c", "r", true, NaN, undefined];
var rezultat = ""

for (var i = 0; i < y.length; i++) {
    rezultat += y[i];
}
console.log(rezultat)




//6. Write a program that prints the elements of the following array.
//var a = [

//[1, 2, 1, 24],
//[8, 11, 9, 4],
//[7, 0, 7, 27]
//];

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]]


for (var i = 0; i < a.length; i++){

    for (var j = 0; j < a[i].length; j++){
        console.log(a[i][j])
    }


}


//7. Write a program that outputs the sum of squares of the first 20 numbers.
var n = 20
var suma = 0
for (var i = 1; i <= n; i++) {
    var x = 1
    for (var j = 0; j < 2; j++){
        x *= i
    }
    suma += x
}
console.log(suma)

//8. Write a program that computes average marks of the following students. Then use this
//average to determine the corresponding grade.

//David 80
//Marko 77
//Dany 88
//John 95
//Thomas 68
//The grades are computed as follows :

//< 60% F
//< 70% D
//< 80% C
//< 90% B
//< 100% A

var marks = [80, 77, 88, 95, 68]
var marks_summ = 0

for (var i = 0; i < marks.length; i++){
    marks_summ += marks[i]
    average = marks_summ / marks.length
}
    if (average < 60){
        console.log("Grade is F")
    }
        else if (average >= 61 && average <= 70){
        console.log("Grade is D")
        }
        else if (average >= 71 && average <= 80){
        console.log("Grade is C")  
        }
        else if (average >= 81 && average <= 90){
            console.log("Grade is B")   
        }
        else if (average >= 91 && average <= 100){
            console.log("Grade is A") 
        }
        else console.log("Input is out of range")



//9. Write a program that uses console.log to print all the numbers from 1 to 100, with two
//exceptions. For numbers divisible by 3, print Fizz instead of the number, and for numbers
//divisible by 5 (and not 3), print Buzz instead. When you have that working, modify your
//program to print FizzBuzz, for numbers that are divisible by both 3 and 5 (and still print
//Fizz or Buzz for numbers divisible by only one of those).

for (var i =0; i <= 100; i++){
    if ((i % 3 === 0) && (i % 5 === 0)){
    console.log("FizzBuzz")
    }
    else if (i % 3 === 0){
        console.log("Fizz")
    }
    else if (i % 5 === 0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}
