// The following exercises needs to be done on 2 ways: 1) using classes, 2) using constructor functions.

// 1.
// a)Create a Car class with properties (brand, model, motion) and methods (check motion, accelerate, break).
// Check motion method should check the speed and returns if the car are in move or not (speed is greater than zero). Accelerate method should increase the speed for some number we provide.
// Break method should decrease the speed for the number we provided (pay attention if the speed is negative number after decreasing).
// b) Add the status method that displays all current data for the car (model, brand, motion state, speed => something like "Ford Mondeo is running at 150km/h, car is moving").
// c) Add a new method to stop the car immediately (set the speed to 0). It doesn't need parameters.
// d) Create a 3 car objects and test it!



class Car {
    constructor(brand, model, motion) {
        this.brand = brand;
        this.model = model;
        this.motion = motion;
    }

    checkMotion() {
        var inMove = "Car is not moving."
        if (this.motion > 0) {
            inMove = "Car is moving."
        } else {
            inMove
        }
        return inMove
    }
    accelerate(givenNumb) {
        var acceleration = this.motion + givenNumb
        return acceleration
    }
    break(givenNumb) {
        var decelerate = this.motion - givenNumb
        if (decelerate <= 0) {
            decelerate = 0
            console.log("Speed can,t be less than zero")
        }
        return decelerate
    }
    statusMethod() {
        return this.brand + " " + this.model + " is running at " + this.motion + "km/h" + ", " + this.checkMotion()
    }
    stopTheCar() {
        this.motion = 0
        return "Car speed is " + this.motion
    }
}
var car1 = new Car("Audi", "A6", 100);
var car2 = new Car("Opel", "Corsa", 80);
var car3 = new Car("Fiat", "Punto", 0);
console.log(car1.statusMethod())
console.log(car2.statusMethod())
console.log(car3.statusMethod())
// 2.
// a)Create a TV class with properties like brand, channel and volume. Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// b) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// c) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// d) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// e) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
// f) Create a TV object and test it!


class TV {
    constructor(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }
    increaseVolume(givenValue) {
        this.volume = this.volume + givenValue
        if (this.volume > 100) {
            this.volume = 100;
            console.log("Maximum volume is 100")
        }
        return this.volume
    }
    decreaseVolume(givenValue) {
        this.volume = this.volume - givenValue
        if (this.volume < 0) {
            this.volume = 0;
            console.log("TV is muted")
        }
        return this.volume
    }
    setChannel(givenNumb) {
        if (givenNumb < 1 || givenNumb > 50) {
            return this.channel
        } else {
            this.channel = givenNumb
            return this.channel
        }
    }

    statusInfo() {
        return this.brand + " at channel " + this.channel + " volume " + this.volume
    }

    reset() {
        this.channel = 1;
        this.volume = 50;
        console.log(this.channel, this.volume)
    }
}
var TV1 = new TV("Samsung")
console.log(TV1.setChannel(40))
console.log(TV1.setChannel(61))
console.log(TV1.increaseVolume(30))
console.log(TV1.decreaseVolume(40))
console.log(TV1.statusInfo())
TV1.reset()




