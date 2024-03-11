let boton = document.getElementById("botonCalcular")

boton.addEventListener("click" , (e) =>{
    let numero = Number(document.getElementById("numero").value)
    let contador = 0

    while (numero != 0){
        numero /= 10
        numero = numero.toFixed(0)
        contador++
    }

    document.getElementById("respuesta").innerHTML = `<h3>Cantidad de digitos: ${contador}</h3>`
})

