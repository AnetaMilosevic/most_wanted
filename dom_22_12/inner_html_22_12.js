// Do the following exercise in two ways: using DOM manipulation methods and using innerHTML.
// Create a function that is used for building a dropdown / select element.
// It first builds a dropdown and then adds it to the DOM.
// The function takes two arguments: the first is an array of strings and the second
// is a DOM node to which the dropdown will be added.
// Create options that correspond to items in the passed array and add them to the select element.
// Add the whole dropdown list to DOM.
// Use this function to create two selects on the page.
// The first select should be appended to the first div on the page.
// The second select should be appended to the last div on the page.

function dropdownCreator(elems, parent) {
    var parentNode = document.querySelector(parent)
    var select = document.createElement('select');
    var label = document.createElement('label');
    var labelText = document.createTextNode("Label ")
    label.appendChild(labelText)
    parentNode.appendChild(label)
    parentNode.appendChild(select)

    for (var i = 0; i < elems.length; i++) {
        var option = document.createElement("option")
        var text = document.createTextNode(elems[i])
        option.setAttribute("value", elems[i])
        option.appendChild(text)
        select.appendChild(option)
    }


}
dropdownCreator(["link 1", "link 2", "link 3"], "#firstDiv")
dropdownCreator(["link 1", "link 2", "link 3"], "#lastDiv")