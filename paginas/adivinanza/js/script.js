let boton = document.getElementById("botonCalcular")


boton.addEventListener("click", (e) => {
    let numero = -2

    let aleatorio = Math.random() * (100 - 1) + 1;
    aleatorio = aleatorio.toFixed(0)
    console.log(aleatorio)

    while (numero != aleatorio) {
        numero = prompt("Ingrese el numero que cree que es")

        if (numero != aleatorio) {
            if (numero < aleatorio) {
                alert("El numero a adivinar es mayor")
            }
            else if (numero > aleatorio) {
                alert("El numero a adivinar es menor")
            }
        }

    }

    document.getElementById("juego").innerHTML = /*html*/`
    <div class="final">
        <h3>Acertaste!!</h3>
        <img src="./trofeos.png" alt="algo salio mal xd" class="imagen">
        <br>
        <button type="button" class="btn btn-outline-primary" id="jugarDeNuevo">Jugar de nuevo</button>

    </div>
    `
    let botonReiniciar = document.getElementById("jugarDeNuevo")

    botonReiniciar.addEventListener("click", e => {
        location.reload()
    })

})

