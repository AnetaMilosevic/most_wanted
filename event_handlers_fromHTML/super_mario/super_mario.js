
var standingMario = document.querySelector(".standingMario")
var movingMario = document.querySelector(".movingMario")
var background = document.querySelector(".background")
var xPos = 1000;
var yPos = "200px";


function switchMario(event) {
    if (event.keyCode === 32) {
        console.log(event)
        movingMario.classList.remove("hidden")
        standingMario.classList.add("hidden")
    }
}
function movingBackground(event) {
    if (event.keyCode === 32) {
        background.style.backgroundPosition = xPos + "px " + yPos;
        xPos -= 20;
    }
}

document.addEventListener("keypress", switchMario)
document.addEventListener("keypress", movingBackground)
