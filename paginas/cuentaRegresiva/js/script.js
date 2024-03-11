let boton = document.getElementById("iniciar")

boton.addEventListener("click" , (e)=>{
    let cuenta = Number(document.getElementById("cuenta").value)

    document.getElementById("title").textContent = "Preparando para despegue"

    setInterval(()=>{
        if(cuenta === 0){

            document.getElementById("marco_teorico").innerHTML = `<img src="img/cohete.gif" alt="algo salio mal xd" id="imagen">`
            document.getElementById("title").textContent = "*despega*"
            document.getElementById("calculadora").innerHTML = `<h1>0</h1>`

        }
        else{
            document.getElementById("calculadora").innerHTML = `<h1>${cuenta}</h1>`
            cuenta--
        }
    }, 1000)


})
