
function print() {
    console.log("HELLO WORLD!")
}
print()

function printNavigation() {
    console.log(window.navigator.appName);
    console.log(window.navigator.appVersion);
    console.log(window.navigator.platform)
}
printNavigation()

function online() {
    if (window.navigator.onLine === true) {
        return "Online"
    }
    else {
        return "Ofline"
    }
}
console.log(online())

function screenInfo() {
    console.log("Curent screen width is " + window.screen.width);
    console.log("Curent screen width is " + window.screen.height);
    console.log("Curent screen width is " + window.screen.availHeight);
}
screenInfo()

function locationInfo() {
    console.log(window.location.href)
    console.log(window.location.hostname)
    console.log(window.location.protocol)
    console.log(window.location.search)
}
locationInfo()

function reload() {
    window.location.reload
}
reload()

// function redirect() {
//     window.location = "https://www.google.com/"
// }
// redirect()

function saveItem(lsKey, lsValue) {
    window.localStorage.setItem(lsKey, lsValue)
}
saveItem("name", "Aneta")
saveItem("name1", "Vuk")

function getItem(lsItem) {
    var item = window.localStorage.getItem(lsItem)
    if (item) {
        console.log(item)
    }
    else {
        console.log("There is no data")
    }
}
getItem("name")

function removeData(lsName) {
    window.localStorage.removeItem(lsName)
}
removeData("name")

function saveItemSessionStorage(lsKey, lsValue) {
    window.sessionStorage.setItem(lsKey, lsValue)
}
saveItemSessionStorage("name", "Aneta")
saveItemSessionStorage("name1", "Vuk")

function getItemSessionStorage(lsItem) {
    var item = window.sessionStorage.getItem(lsItem)
    if (item) {
        console.log(item)
    }
    else {
        console.log("There is no data")
    }
}
getItemSessionStorage("name")

function removeDataSessionStorage(lsName) {
    window.sessionStorage.removeItem(lsName)
}
removeDataSessionStorage("name")

function twoPagesBack() {
    window.history.go(-2)
}
twoPagesBack()

function greetingMessage() {
    window.alert("Hello!");
} greetingMessage()


function promptMessage() {
    var message = window.prompt("What is your favorite color", "")
    if (message) {
        var answer1 = "We will submit this answer now! " + message
    }
    if (window.confirm(answer1)) {
        return window.alert("Answer is successfully submitted")
    }
}
promptMessage()


function randomNumbers() {
    var arr = []
    for (var i = 0; i < 10; i++) {
        arr.push((Math.random(i) * 50))
    }
    console.log(arr)
    return arr
}
randomNumbers()

function roundNumber(random) {
    var arr = random()
    return arr.map((elem) => elem.toFixed(2))
}
console.log(roundNumber(randomNumbers))

function floor(random) {
    var arr = random()
    return arr.map((elem) => Math.floor(elem))
}
console.log(floor(randomNumbers))

function max(floor) {
    var arr = floor(randomNumbers)
    console.log(arr)
    return Math.max(...arr)
}
console.log(max(floor))

var date = new Date()
console.log(date)

var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
console.log(hours + ":" + minutes + ":" + seconds)

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
console.log(day + "." + month + "." + year)


