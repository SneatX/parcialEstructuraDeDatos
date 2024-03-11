const boton = document.getElementById("botonCalcular")

boton.addEventListener("click" , e =>{
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    let nota5 = Number(document.getElementById("nota5").value)

    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5)/5

    document.getElementById("resultado").innerHTML = /*html*/`
        <h3>Su promedio es de: ${promedio.toFixed(2)}</h3>
    `
})