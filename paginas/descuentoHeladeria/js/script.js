let boton = document.getElementById("botonCalcular")

boton.addEventListener("click" , (e)=>{
    let tipo = document.getElementById("membresia").value
    let precio = Number(document.getElementById("precio").value)
    let total

    if (tipo === "1")
        total = precio - (precio * 0.1)
    else if(tipo === "2")
        total = precio - (precio * 0.15)
    else
        total = precio - (precio * 0.2)

    document.getElementById("resultado").innerHTML = /*html*/ `
        <h3>Cantidad a pagar: $${total}</h3>
    `
})