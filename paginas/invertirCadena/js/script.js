let boton = document.getElementById("botonCalcular")

boton.addEventListener("click" , (e) =>{
    let texto = document.getElementById("texto").value
    
    let textoInvertido = []
    let contador = 0

    for (let i = texto.length; i > 0 ; i--){
        textoInvertido[contador] = texto[i-1]
        contador++
    }

    let cadenaInvertida = textoInvertido.join("") //Se hace esto para que el array se vuelva un string y se imprima sin problemas (sin comas)

    document.getElementById("respuesta").innerHTML = /*html*/`
        <h4>Texto invertido </h4>
       <p> ${cadenaInvertida} </p>
    `
})

