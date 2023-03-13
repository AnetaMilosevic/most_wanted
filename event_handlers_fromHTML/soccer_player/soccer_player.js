
var soccerField = document.querySelector(".soccerField");
var player = document.querySelector(".player")
var button = document.querySelector(".stopMoving")

function movePlayer(e) {
    player.style.left = e.clientX - 20 + 'px';
    player.style.top = e.clientY - 50 + 'px';
}
soccerField.addEventListener('click', movePlayer)

button.addEventListener('click', function () {
    soccerField.removeEventListener('click', movePlayer)
})