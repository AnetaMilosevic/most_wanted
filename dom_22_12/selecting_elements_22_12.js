// Create a function that selects the second list and applies a class that sets some
// background color to it.

function toChangeBackgroundColor() {
    var secondList = document.getElementById("secondList")
    if (secondList) {
        secondList.classList.add("newSecondList")
    }
}
toChangeBackgroundColor()

// Create a second function that, when triggered, selects all <li> elements on the page.
// The function also sets a class that sets some bg color to every <li> element.

function toChangeBackgroundColorOnLiElements() {
    var li = document.getElementsByTagName("li")
    for (var i = 0; i < li.length; i++) {
        li[i].classList.add("liBbColor");
    }
}
toChangeBackgroundColorOnLiElements()


// Create one more unordered list and one more function
// The function should select only <li> elements from that last list
// Each <li> element should get a class that sets some bg color and transforms the text to uppercase.

function selectElementsFromLastList() {
    var li = document.querySelectorAll('body > ul:nth-child(3) > li')
    for (var i = 0; i < li.length; i++) {
        li[i].classList.add("newLiBbColor");
    }
}
console.log(selectElementsFromLastList())
