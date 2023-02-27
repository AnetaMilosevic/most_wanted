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
}
button.addEventListener('click', chat)




// let app = document.querySelector('#app');

// let langs = ['TypeScript', 'HTML', 'CSS'];

// let nodes = langs.map(lang => {
//     let li = document.createElement('li');
//     li.textContent = lang;
//     return li;
// });

// app.append(...nodes);