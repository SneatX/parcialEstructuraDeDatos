let boton = document.getElementById("botonCalcular")

boton.addEventListener("click" , (e) =>{
    let texto = document.getElementById("texto").value
    let letraA = 0
    let letraE = 0
    let letraI = 0
    let letraO = 0
    let letraU = 0


    texto.split()

    for(let i = 0; i < texto.length ; i++){
        
        if(texto[i].toLowerCase() === "a"){
            letraA++
        }
        else if (texto[i].toLowerCase() === "e"){
            letraE++
        }
        else if (texto[i].toLowerCase() === "i"){
            letraI++
        }
        else if (texto[i].toLowerCase() === "o"){
            letraO++
        }
        else if (texto[i].toLowerCase() === "u"){
            letraU++
        }
    }

    document.getElementById("impresionA").textContent = letraA
    document.getElementById("impresionE").textContent = letraE
    document.getElementById("impresionI").textContent = letraI
    document.getElementById("impresionO").textContent = letraO
    document.getElementById("impresionU").textContent = letraU


})

