// 1.
// Headquarters have asked that you store the following information about each book: title, author,
// copyright date, ISBN, number of pages, number of times the book has been checked out, whether the book has been discarded.

// Headquarters also needs you to track certain actions that you must perform when books get out of date.
// First, for a manual, the book must be thrown out if it is over 5 years old.
// Second, for a novel, the book should be thrown out if it has been checked out over 100 times.

// Construct three classes that hold the information needed by headquarters as properties.
// One class should be a Book class and two child classes of the Book class called Manual and Novel.
// Each class will contain two methods. One will be a constructor.
// The other one will either be in charge of disposal of the book or updating the property related to the number of times a book has been checked out.
// Hint: This means you need to read through the requirements for the problem and decide what should belong to Book and what should belong to the Novel and Manual classes.

// Declare an object of the Novel class for the following tome from the library. Declare an object of the Manual class for the following tome from the library.
// One of the above books needs to be discarded. Call the appropriate method for that book to update the property. That way the crew can throw it into 
// empty space to become debris.
// The other book has been checked out 5 times since you first created the object. Call the appropriate method to update the number of times the book 
// has been checked out.    ‚‚  	    

class Book {
    constructor(title, author, copyrightDate, ISBN, numberOfPages, checkedOutCounter, isBookDiscarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.numberOfPages = numberOfPages;
        this.checkedOutCounter = checkedOutCounter
        this.isBookDiscarded = isBookDiscarded;
    }
    isBookCheckout(numb) {
        return checkedOutCounter += numb
    }
}
class Manual extends Book {
    constructor(title, author, copyrightDate, ISBN, numberOfPages, checkedOutCounter, isBookDiscarded) {
        super(title, author, copyrightDate, ISBN, numberOfPages, checkedOutCounter, isBookDiscarded)
    }
    dispose(year) {
        if ((year - this.copyrightDate) > 5) {
            this.isBookDiscarded = true
        }
        return this.isBookDiscarded
    }
}
class Novel extends Book {
    constructor(title, author, copyrightDate, ISBN, numberOfPages, checkedOutCounter, isBookDiscarded) {
        super(title, author, copyrightDate, ISBN, numberOfPages, checkedOutCounter, isBookDiscarded)
    }
    dispose() {
        if (this.checkedOutCounter > 100) {
            this.isBookDiscarded = true
        }
        return this.isBookDiscarded
    }
}
var manual1 = new Manual("Typing manual", "Barbara Hughes", 2019, "0-935012-00-1", "111", 50, false)
var novel1 = new Novel("The Da Vinci Code", "Dan Brown", 2010, "0-869500-00-3", "418", 101, false)
console.log(manual1.dispose(2023))
console.log(novel1.dispose())


// 2.
// You need to create some kind of calculator.
// The argument passed to run(instructions) will always be a string containing a series of instructions.
// The instruction set of the calculator will be this:

// + (plus): Pop the last 2 values from the stack, add them, and push the result onto the stack.
// - (minus): Pop the last 2 values from the stack, subtract the lower one from the topmost one, and push the result.
// * (multiple): Pop the last 2 values, multiply, and push the result.
// / (divide): Pop the last 2 values, divide the topmost one by the lower one, and push the result.
// DUP: Duplicate (not double) the top value on the stack.
// POP: Pop the last value from the stack and discard it.
// PSH: Performed whenever a number appears as an instruction. Push the number to the stack.
// Any other instruction (for example, a letter) should result in the value "Invalid instruction: [instruction]".

// Examples:
// StackCalc("") ➞ 0

// StackCalc("5 6 +") ➞ 11

// StackCalc("3 DUP +") ➞ 6

// StackCalc("6 5 5 7 * - /") ➞ 5

// StackCalc("x y +") ➞ Invalid instruction: x

// If there are no instructions, the value should remain 0.
// The return value of get value() should be the topmost value on the stack.
// Be careful with methods in this class!
class Calculator {
    constructor() {
        this.stackCalc = []
    }

    value() {
        return this.stackCalc.pop()
    }

    plus() {
        var result = 0
        result = this.value() + this.value()
        this.stackCalc.push(result)
        return result
    }

    minus() {
        var result = 0
        result = this.value() - this.value()
        this.stackCalc.push(result)
        return result
    }

    multiple() {
        var result = 0
        result = this.value() * this.value()
        this.stackCalc.push(result)
        return result
    }

    divide() {
        var result = 0
        var first = this.value()
        var second = this.value()
        if (first > second) {
            result = first / second
        } else {
            result = second / first
        }
        this.stackCalc.push(result)
        return result
    }
    dup() {
        this.stackCalc.push(this.stackCalc[this.stackCalc.length - 1]);
        this.plus()
        return result
    }
    psh(instruction) {
        var instructionArr = instruction.split(" ")
        if (!instruction) {
            return 0
        }

        for (var i = 0; i < instructionArr.length; i++) {
            if (parseInt(instructionArr[i])) {
                this.stackCalc.push(parseInt(instructionArr[i]));
            } else if (instructionArr[i] === "+") {
                this.plus()
            } else if (instructionArr[i] === "-") {
                this.minus()
            } else if (instructionArr[i] === "*") {
                this.multiple()
            } else if (instructionArr[i] === "/") {
                this.divide()
            } else {
                console.log("Invalid instruction: "[instruction])
            }
        }

        return this.stackCalc[0]
    }
}

var first = new Calculator()
console.log(first.psh("6 5 5 7 * - /"))

// 3.
// Write a class called CoffeeShop, which has three instance variables and seven methods. Variables are:
// a) name : a string (basically, of the shop),
// b) menu : an array of items (of object type), with each item containing the item (name of the item), type (whether food or a drink) and price,
// c) orders : an empty array.

// Methods:
// a) addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise, return "This item is currently unavailable!"
// b) fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"
// c) listOrders: returns the list of orders taken, otherwise, an empty array.
// d) dueAmount: returns the total amount due for the orders taken, round off up to two decimal places.
// e) cheapestItem: returns the name of the cheapest item on the menu.
// f) drinksOnly: returns only the item names of type drink from the menu.
// g) foodOnly: returns only the item names of type food from the menu.

// IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

class CoffeeShop {
    constructor(shopName, menu) {
        this.shopName = shopName;
        this.menu = menu
        this.orders = []
    }
    addOrder(item) {
        if (this.menu.some(elem => elem.itemName === item)) {
            var val = this.menu.filter(elem => elem.itemName === item)[0]
            return this.orders.push(val)
        } else {
            return "This item is currently unavailable!"
        }
    }
    fulfillOrder() {
        if (this.orders.length > 0) {
            return "The " + this.orders[0] + " is ready"
        } else "All orders have been fulfilled!"
    }
    listOrders() {
        return this.orders
    }
    dueAmount() {
        return this.orders.reduce(function (accumulator, currentValue) {
            return accumulator += currentValue.price
        }, 0)
    }
    cheapestItem() {
        return this.menu.sort(function (a, b) {
            return a.price - b.price
        })[0].itemName
    }
    drinksOnly() {
        return this.menu.filter(elem => elem.type === "drink").map(elem => elem.itemName)
    }
    foodOnly() {
        return this.menu.filter(elem => elem.type === "food").map(elem => elem.itemName)
    }
}
class ShopMenu {
    constructor(itemName, type, price) {
        this.itemName = itemName;
        this.type = type;
        this.price = price
    }
}
var items = [new ShopMenu("pizza", "food", 300), new ShopMenu("coffee", "drink", 200), new ShopMenu("sandwich", "food", 250), new ShopMenu("juice", "drink", 200)]

console.log(items[2].itemName)
var coffeeShop1 = new CoffeeShop("Coffee dream", items, "pizza")
console.log(coffeeShop1)
console.log(coffeeShop1.cheapestItem())
coffeeShop1.addOrder("coffee")
coffeeShop1.addOrder("pizza")
coffeeShop1.addOrder("juice")
console.log(coffeeShop1.dueAmount())
console.log(coffeeShop1.drinksOnly())
console.log(coffeeShop1.foodOnly())
console.log(coffeeShop1.orders)

// Examples:
// tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
// // Tesha's coffee shop does not sell hot cocoa
// tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
// // specifying the variant of "iced tea" will help the process

// tcs.addOrder("cinnamon roll") ➞  "Order added!"
// tcs.addOrder("iced coffee") ➞ "Order added!"
// tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
// // the list of all the items in the current order

// tcs.dueAmount() ➞ 2.17

// tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
// tcs.fulfillOrder() ➞ "The iced coffee is ready!"
// tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
// // all orders have been presumably served

// tcs.listOrders() ➞ []
// // an empty array is returned if all orders have been exhausted

// tcs.dueAmount() ➞ 0.0
// // no new orders taken, expect a zero payable

// tcs.cheapestItem() ➞ "lemonade"
// tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
// tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]


