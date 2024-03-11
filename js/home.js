const buttonHome = document.getElementById("homeButton")

buttonHome.addEventListener("click", event => {
    event.preventDefault()
    event.stopPropagation()

    window.location.reload()
})