let boton = document.getElementById("botonCalcular")

boton.addEventListener("click" , (e)=>{
    let edad = Number(document.getElementById("edad").value)
    let text

    if (edad >= 18)
        text = "Ya tiene 18 años cumplidos, es mayor de edad"
    else
        text = "No tiene 18 años cumplidos, no es mayor de edad"

    document.getElementById("resultado").innerHTML = /*html*/ `
        <h3>${text}</h3>
    `
})