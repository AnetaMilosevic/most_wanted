var inputField = document.querySelector("#inputField")
var content = document.querySelector(".content-wrapper")
var button = document.querySelector("#button")

function chat(e) {
    var paragraph = document.createElement("p");
    paragraph.textContent = inputField.value
    // console.log(inputField.value)
    // console.log(paragraph)
    // console.log(inputField)
    content.append(paragraph);
    inputField.value = ""
}
button.addEventListener('click', chat)


