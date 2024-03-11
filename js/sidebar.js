const sidebarButton = document.getElementById("sidebarButton")
const sidebar = document.getElementById("sidebar")
const content = document.getElementById("content")

sidebarButton.addEventListener("click", (event) => {
    event.stopPropagation()
    event.preventDefault()

    if (sidebar.style.width === "0%" || !sidebar.style.width) {
        //Abrir sidebar
        sidebar.style.width = "20%"
        content.style.width = "80%"
        sidebar.style.border = "2px solid black"
    }
    else {
        //Cerrar sidebar
        sidebar.style.width = "0%"
        sidebar.style.border = "0"
        content.style.width = "100%"
    }
})