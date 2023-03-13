// // Employees and Managers
// 1. Create constructor functions with properties representing the following:
// ○ Person: name, surname
// ○ Employee: inherits Person and has job and salary
// ○ Developer: inherits from Employee and has specialization
// ○ Manager: inherits from Employee and has department
// 2. All developers should inherit method:
// ○ getSpecialization which prints out the name of the specialization
// 3. All managers should inherit methods:
// ○ getDepartment which prints out the name of the department
// ○ changeDepartment which sets the department value to the given value
// 4. All employees should inherit methods:
// ○ getData which returns the name, surname and salary
// ○ getSalary which prints out the salary
// ○ increaseSalary which increases the salary by 10 %

function Person(name, surname) {
    this.name = name;
    this.surname = surname
}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

var employee1 = new Employee("Pera", "Peric", "programer", "1000")
console.log(JSON.stringify(employee1))

Employee.prototype.getSalary = function () {
    console.log(this.salary)
}

Employee.prototype.increaseSalary = function () {
    this.salary += this.salary * 0.1
}

Employee.prototype.getData = function () {
    return this.name + " " + this.surname + ", " + this.salary + " eura";
}

Employee.prototype.printEmployeeInfo = function () {
    console.log(this.getData());
}
employee1.printEmployeeInfo();


function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
}

var developer1 = new Developer()

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
Manager.prototype.getDepartment = function () {
    console.log(this.department)
}
Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment
}

//     Applications:
// 1. Create constructor functions with properties representing the following:
// ○ WebApp: name, url, technologies, licence, stars
// ○ MobileApp: name, platforms, licence, stars
// 2. All web applications should inherit methods:
// ○ getData which prints out all the information
// ○ reactBased which checks if one of the used technologies is React
// 3. All mobile applications should inherit methods:
// ○ getData which prints out all the informations
// ○ forAndroid which checks if one of the platforms the application is developed for is
// Android

// 4. Both web and mobile applications should inherit methods:
// ○ isCCLicence which checks if the licence of the application is CC(Creative
// Commons)
// ○ like which increases the number of stars by one
// ○ showStars which prints out the number of stars

function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars
}

App.prototype.isCCLicence = function () {
    return this.licence === "CC"
}
App.prototype.like = function () {
    this.stars += 1
}
App.prototype.showStars = function () {
    console.log(this.stars)
}


function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars)
    this.url = url;
    this.technologies = technologies;
}

WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function () {
    console.log(this.name + ", " + this.url + ", " + this.technologies + ", " + this.licence + ", " + this.stars)
}

WebApp.prototype.reactBased = function () {
    return this.technologies.includes("React")
}

function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function () {
    console.log(this.name + " " + this.platforms + " " + this.licence + " " + this.stars)
}

MobileApp.prototype.forAndroid = function () {
    return this.platforms.includes("Android")
}

var webApp1 = new WebApp("Ananas", "https://ananas.rs/", "React", "CC", 1)
var mobileApp1 = new MobileApp("Banca Intesa", "Android", "CC", 3)
console.log(webApp1.reactBased())
webApp1.getData()
console.log(webApp1.isCCLicence())
webApp1.like()
webApp1.like()
webApp1.showStars()
mobileApp1.getData()
console.log(mobileApp1.forAndroid())
mobileApp1.like()
mobileApp1.showStars()