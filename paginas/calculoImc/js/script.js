let boton = document.getElementById("botonCalcular")

boton.addEventListener("click", (e)=>{
    let peso = Number(document.getElementById("peso").value)
    let estatura = Number(document.getElementById("estatura").value)
    let salida

    let calculoIMC = peso/(estatura*estatura)

    if(calculoIMC < 18.5){
        salida = "se encuentra con peso insuficiente"
    }
    else if( calculoIMC >=18.5  && calculoIMC <24.9){
        salida = "se encuentra con peso normal"
    }
    else if( calculoIMC >=25  && calculoIMC <29.9){
        salida = "se encuentra con sobrepeso"
    }
    else if( calculoIMC >=30  && calculoIMC <34.9){
        salida = "se encuentra con obesidad"
    }else{
        salida = "se encuentra con obesidad mórbida"
    }
    

    document.getElementById("resultado").innerHTML = /*html*/ `
        <p class="salida">Su IMC es de: <b>${calculoIMC.toFixed(2)}</b>, eso significa que <b>${salida}</b></p>
    `
})


