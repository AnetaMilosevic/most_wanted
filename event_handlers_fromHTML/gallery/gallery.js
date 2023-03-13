document.addEventListener("click", getRedBorder)

function getRedBorder(event) {
    console.log(event.target.outerHTML)
    if (event.target.clientWidth !== 300) {
        event.stopPropagation()
    } else {
        event.target.classList.add("border")
    }
}