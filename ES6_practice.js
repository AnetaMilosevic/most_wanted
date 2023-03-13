// 1. Write a function that capitalizes the first letter of each string argument it receives.
// Function arguments: ["hello", "there", "ES", 6]
// Output: ["Hello", "There", "ES"]

function capitalizes(array) {
  const capitalizedArray = array
    .filter((elem) => typeof elem === "string")
    .map((elem) => {
      const firstLetter = elem[0].toUpperCase();
      const restOfTheWord = elem.slice(1);
      const result = `${firstLetter}${restOfTheWord}`;
      return result;
    });

  // }).arg.text.charAt(0).toUpperCase()
  return capitalizedArray;
}
console.log(capitalizes(["hello", "there", "ES", 6]));

// 2. Write a function that calculates sale tax that should be paid for the product of the given price.
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
// Input: [{ name: “Banana”, price: 120 }, {name: “Orange”, price: 100}]
// Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
// Output2: [ 24, 20 ] // tax only

const products = [
  { name: "Banana", price: 120 },
  { name: "Orange", price: 100 },
];

const taxRate = 0.2;

function calculateSaleTax(products) {
  const taxOnly = [];
  const productWithTax = products.map((product) => {
    const tax = product.price * taxRate;
    taxOnly.push(tax);
    const priceWithTax = product.price + tax;
    return {
      name: product.name,
      price: priceWithTax,
    };
  });
  return [productWithTax, taxOnly];
}

console.log(calculateSaleTax(products));

// 3. Write a function that increases each element of the given array by the given value. If the value is
// omitted, increase each element of the array by 1.
// Input: [4, 6, 11, -9, 2.1], 2
// Output: [6, 8, 13, -7, 4.1]

function increaseElementByGivenValue(array, value) {
  return array.map((elem) => (value ? elem + value : elem + 1));
}
// function increaseElementByGivenValue(array, value) {
//   return array.map((elem) => {
//     if (value) {
//       return elem + value;
//     } else {
//       return elem + 1;
//     }
//   });
// }

console.log(increaseElementByGivenValue([4, 6, 11, -9, 2.1], 2));

// 4. Write a function that filters all even elements of the array.
// Input: [6, 11, 9, 0, 3]
// Output: [6, 0]

function filterEvenElements(array) {
  const evenElements = array.filter((elem) => elem % 2 === 0);
  return evenElements;
}
console.log(filterEvenElements([6, 11, 9, 0, 3]));

// 5. Write a function that filters all the strings from the given array that contain substring JS or js.
// Input: ["compiler", "transpiler", "babel.js", "JS standard", "linter"]
// Output: ["babel.js, "JS standard"]

function filterSubstring(arr) {
  const substring = arr.filter(
    (elem) => elem.includes("JS") || elem.includes("js")
  );

  return substring;
}
console.log(
  filterSubstring([
    "compiler",
    "transpiler",
    "babel.js",
    "JS standard",
    "linter",
  ])
);

// 6. Write a function that filters all integer numbers from the given array.
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// Output: [7, 8]

function returnOnlyInteger(arr) {
  const onlyInteger = arr.filter((elem) => Number.isInteger(elem));
  return onlyInteger;
}
console.log(returnOnlyInteger([1.6, 11.34, 9.23, 7, 3.11, 8]));

// 7. Write a function that filters all integer arguments that contain digit 5.
// Function arguments: 23, 11.5, 9, "abc", 45, 28, 553
// Output: [45, 553]

function isContainGivenDigit(arr) {
  const isContain = arr.filter(
    (elem) => Number.isInteger(elem) && elem.toString().includes("5")
  );
  return isContain;
}

console.log(isContainGivenDigit([23, 11.5, 9, 45, 28, 553]));

// 8. Write a function that returns indexes of the elements greater than 10.
// Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// Output: [1, 2, 5]

const array = [1.6, 11.34, 29.23, 7, 3.11, 18];

const result = [];

array.forEach((elem, index) => {
  if (elem > 10) {
    result.push(index);
  }
});

console.log(result);

// 9.
// a. Create an array of persons. A person should be an object with name and age properties.
// Experiment with enhanced object literals.
// b. Write a function that prints out the names of persons older than 25.
// c. Write a function that check if there is a person older than 40.
// d. Write a function that checks if all persons are older than 20.

const persons = [
  { name: "Jane", age: 23 },
  { name: "Bob", age: 31 },
  { name: "Anna", age: 19 },
  { name: "David", age: 42 },
];

function OlderThan25(person) {
  person.forEach((person) => {
    if (person.age > 25) {
      console.log(person.name);
    }
  });
}
OlderThan25(persons);

function isTherePersonOlderThan40(person) {
  return person.some((person) => person.age > 40);
}
console.log(isTherePersonOlderThan40(persons));

function areAllPersonsOlderThan20(person) {
  return person.every((person) => person.age > 20);
}
console.log(areAllPersonsOlderThan20(persons));

// 10. Write a function that checks if the given array is an array of positive integer values.
// Input: [3, 11, 9, 5, 6]
// Output: yes
// Input: [3, -12, 4, 11]
// Output: no

function areElementsPositiveIntegers(arr) {
  if (arr.every((elem) => elem >= 0)) {
    return "Yes";
  } else {
    return "No";
  }
}
console.log(areElementsPositiveIntegers([3, -12, 4, 11]));

// 11. Write a function that calculates the product of the elements of the array.
// Input: [2, 8, 3]
// Output: 48

function productOfTheElements(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
}
console.log(productOfTheElements([2, 8, 3]));

// 12. Write a function that calculates the maximum of the given array.
// Input: [2, 7, 3, 8, 5.4]
// Output: 8

function findMaximum(arr) {
  const max = Math.max(...arr);
  return max;
}
console.log(findMaximum([2, 7, 3, 8, 5.4]));
