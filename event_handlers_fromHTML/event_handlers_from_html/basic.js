

function toChangeBackgroundColor() {
    var firstDiv = document.querySelector(".bgColor")
    if (firstDiv.className.includes("firstButton")) {
        firstDiv.classList.remove("firstButton")
        console.log(firstDiv.className)


    } else {
        firstDiv.classList.add("firstButton")

    }
}

var interval

function AutomaticToggle() {
    interval = setInterval(function () {
        var firstDiv = document.querySelector(".bgColor2")
        if (firstDiv.className.includes("secondButton")) {
            firstDiv.classList.remove("secondButton")
            console.log(firstDiv.className)
        } else {
            firstDiv.classList.add("secondButton")
        }
    }, 800)
}

function cancelAutomaticToggle() {
    clearInterval(interval)
}
// function AutomaticToggle() {
//     var firstDiv = document.querySelector(".bgColor2")
//     var interval = setInterval(frame, 800);
//     if (firstDiv.className.includes("secondButton")) {
//         firstDiv.classList.remove("secondButton")
//         console.log(firstDiv.className)
//     } else {
//         firstDiv.classList.add("secondButton")
//     }
//     function frame() {
//         if (document.addEventListener(onclick, )) {
//             clearInterval(id);
//         } else {
//             width++;
//             element.style.width = width + '%';
//         }
//     }
// }