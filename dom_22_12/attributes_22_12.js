// Create a form that contains multiple input elements with labels.
// Some of those elements should be required.
// Create a function that validates the form.
// The function checks each input element that belongs to the form.
// If the element has the required attribute and no data, it should get red borders.


function validateEmail(text) {
    var isValid = text.indexOf('@')
    if (isValid !== -1) {
        return true
    } else {
        return false
    }
}



function validatePassword(text) {
    if (text.length < 6) {
        return false
    }
    if (!!/[0-9]+/.test(text) === false) {
        return false
    }
    if (text === text.toUpperCase()) {
        return false
    }
    return true
}


function validateForm() {
    var userName = document.getElementById("userName")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var isUserNAmeValid = userName.value.length > 4
    var isEmailValid = validateEmail(email.value)
    var isPasswordValid = validatePassword(password.value)
    if (!isUserNAmeValid) {
        alert("Invalid username");
    }
    if (!isEmailValid) {
        email.classList.add("redBorder");
        alert("Invalid email");
    }
    if (!isPasswordValid) {
        password.classList.add("redBorder");
        alert("Invalid password")
    }
    if (isUserNAmeValid && isEmailValid && isPasswordValid) {
        window.location.href = "https://stackoverflow.com/questions/63760142/how-to-navigate-between-different-html-pages-using-js"
    }
}

var submit = document.getElementById("submit")
submit.addEventListener("click", validateForm)