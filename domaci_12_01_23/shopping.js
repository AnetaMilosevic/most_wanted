'use strict';

// In your IDE of choice, create a new JavaScript file named shopping.js and make it so that all
// code written in the file follows strict mode.Also try to implement error handling as well.
// Create an anonymous immediately - invoking function that will hold the main execution of all
// program calls.Writing a simple command console.log(“Hi”) inside this function and running
// the code should output “Hi“ in the console.

(function () {
    console.log("Hi")
})();


// Create constructor functions with properties representing the following “things”:
// - Product - product id(random number of 5 digits generated on every product creation),
//     name, price(with 2 decimal places), expiration date
// - ShoppingBag - a list of products (initially empty; function constructor does not have any
// input parameters)
// Add getInfo method to Product.It should return a formatted string containing product code
//     (the first and last letter of the name together with the product id), name and price.
// "Banana" -> BA32784, Banana, 129.31
// Add addProduct method to ShoppingBag.It should receive a Product and add it to the
// product list.You can add a product to the list only if it has a valid expiration date.
// Add a method to ShoppingBag that calculates the average product price of products in your
// product list and prints out this value with the precision of three decimals.

// Add getMostExpensive method that finds the most expensive product and prints out its info.

// Add calculateTotalPrice method to ShoppingBag that calculates the total price of products
//     in the shopping bag list.

function Product(name, price, expirationDate) {
    this.productId = Math.floor(Math.random() * 90000 + 10000),
        this.name = name,
        this.price = price.toFixed(2),
        this.expirationDate = new Date(expirationDate)
    this.getInfo = function () {
        var info = [this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase() + this.productId, this.name, this.price]
        return info

    }
}
var banana = new Product("Banana", 129, "2022.6.23")
var kiwi = new Product("Kiwi", 89, "2024.7.13")
var lemon = new Product("lemon", 150.70, "2023.4.10")
var orange = new Product("orange", 90.50, "2023.5.05")
console.log(banana)
console.log(banana.getInfo())



function ShoppingBag() {
    this.productList = [],
        this.addProduct = function (product) {
            var today = new Date()
            if (today < product.expirationDate) {
                this.productList.push(product)
            }
        }
    this.averageProductPrice = function () {
        var average = this.productList.reduce((prev, current) => prev + parseFloat(current.price), 0) / this.productList.length
        return average.toFixed(3)
    }
    this.getMostExpensive = function () {
        var maxPrice = Math.max(...this.productList.map(elem => elem.price));
        var mostExpensive = this.productList.filter(shoppingItem => shoppingItem.price == maxPrice)
        return mostExpensive[0].getInfo()
    }
    this.calculateTotalPrice = function () {
        var totalPrice = this.productList.reduce((prev, current) => prev + parseFloat(current.price), 0)
        return totalPrice
    }
}


var shoppingBag1 = new ShoppingBag()
shoppingBag1.addProduct(banana)
shoppingBag1.addProduct(kiwi)
shoppingBag1.addProduct(lemon)
shoppingBag1.addProduct(orange)
console.log(shoppingBag1.productList)
console.log(shoppingBag1.averageProductPrice())
console.log(shoppingBag1.getMostExpensive())
console.log(shoppingBag1.calculateTotalPrice())


// Create a constructor function with properties representing the following:
// - PaymentCard - account balance(number with 2 decimal places), active or inactive status,
//     valid until date
// Create checkoutAndBuy function which receives shopping bag and payment card and prints if
// the purchase is successful or not.Purchase is successful only if the amount on the card is greater
// or equal to the total price of products in the shopping bag.If there is not enough money, print out
// the amount that is missing to complete the purchase.

function PaymentCard(accountBalance, status, date) {
    this.balance = accountBalance.toFixed(2),
        this.status = status,
        this.validUntilDate = new Date(date)
}
var paymentCardVisa = new PaymentCard(500, "äctive", "2023.05.10")
console.log(paymentCardVisa)

function checkoutAndBuy(shoppingBag, paymentCard) {
    try {
        var missingMoney = 0;
        if (paymentCard > shoppingBag) {
            console.log("Your purchase is successful")
        } else if (paymentCard < shoppingBag) {
            missingMoney = shoppingBag - paymentCard
            console.log("You are missing " + missingMoney + " to complete the purchase")
        }
    } catch (err) {
        console.log('Doslo je do greske');
    }
}
checkoutAndBuy(shoppingBag1.calculateTotalPrice(), paymentCardVisa.balance)