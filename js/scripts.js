function seguir(){
    alert('Você está seguindo Jesus.')
}
// Exercicio 1
function exe1(){
    // vamos usar DOM para recuperar os dados do HTML
    // DOM - Document Object Model
    //converter texto para numero NUMBER()

    let nro1 = number(document.getElementById("nro1").value)
    let nro2 = number(document.getElementById("nro2").value)
    // vamos fazer a subtração
    let sub = nro1 - nro2
    // vamos  mostrar o resultado ao usuario
    //alert(" A Subtração é " + sub)
    document.getElementById("sub").innerText = "O resultado é " + sub
}