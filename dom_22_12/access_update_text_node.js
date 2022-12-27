// Create an unordered list containing <li> items that represent navigation.
// Create a function that takes text from one of the <li> elements and presents it on
// screen using alert.

function alertText() {
    var text = document.querySelector("li").innerText
    alert(text)
}
alertText()

// Create one more function.
// The function should take some text as an argument.
// The function should select the last <li> element in the list and replace its text with
// text passed as the function argument.

function replaceTextOnLiElement(text) {
    var lastLi = document.querySelectorAll("li")
    lastLi[lastLi.length - 1].innerHTML = text
}
replaceTextOnLiElement("Yellow")