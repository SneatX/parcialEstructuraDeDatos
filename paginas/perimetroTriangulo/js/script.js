let botonCateto = document.getElementById("botonCatetos")

botonCateto.addEventListener("click" ,(event)=>{
    event.stopPropagation()

    let catetoA = Number(document.getElementById("cateto1").value)
    let catetoB = Number(document.getElementById("cateto2").value)

    let area = (catetoA*catetoB)/2

    let hipotenusa = Math.sqrt(catetoA **2 + catetoB**2)
    let perimetro = catetoA + catetoB + hipotenusa

    document.getElementById("div_respuestas").innerHTML = /*html*/ `
        <h3>Hipotenusa: ${hipotenusa.toFixed(2)}</h3>
        <h3>Area: ${area.toFixed(2)}</h3>
        <h3>Perimetro: ${perimetro.toFixed(2)}</h3>
    `
})

let botonHipotenusa = document.getElementById("botonHipotenusa")

botonHipotenusa.addEventListener("click" , (event)=>{
    event.stopPropagation()

    let catetoA = Number(document.getElementById("catetoHipotenusa").value)
    let hipotenusa = Number(document.getElementById("hipotenusa").value)

    let catetoB = Math.sqrt(hipotenusa**2-catetoA**2)

    let perimetro = catetoA + catetoB + hipotenusa
    let area = (catetoA * catetoB)/2

    document.getElementById("div_respuestas").innerHTML = /*html*/ `
        <h3>Cateto 2: ${catetoB.toFixed(2)}</h3>
        <h3>Area: ${area.toFixed(2)}</h3>
        <h3>Perimetro: ${perimetro.toFixed(2)}</h3>
    `
})