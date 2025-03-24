function exe1(){
    // recupera os dados do usuário
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    // calcular média
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    if (media >= 7){
        document.getElementById("media").innerText = "Aprovado com média " + media
    }
    else {
        document.getElementById("media").innerText = "Reprovado com média " + media
    }
}
function exe2(){
    // recupera os dados do usuário
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    // calcula média
    let media = (nota1 + nota2) / 2
    if ((media >= 0) && (media < 3)){
        document.getElementById("media").innerHTML = "Reprovado " + media
    }
    else if ((media >= 3) && (media < 7)){
        document.getElementById("media").innerHTML = "Exame " + media
    }
    else if ((media >= 7) && (media <= 10)){
        document.getElementById("media").innerHTML = "Aprovado " + media 
    }
    else {
        document.getElementById("media").innerHTML = "Problema com notas"
    }
}

function exe3(){
    // recupera os dados do usuário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    // calcula o menor e mostra o resultado
    if (nro1 < nro2){
        document.getElementById("menor").innerText = "O menor é " + nro1
    }
    else if (nro2 < nro1){
        document.getElementById("menor").innerText = "O menor é " + nro2
    }
    else {
        document.getElementById("menor").innerText = "Os dois são iguais"
    }
}

function exe4(){
    // recupera os dados do usuário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    // calcula o maior deles
    if (nro1 >= nro2 && nro1 >= nro3){
        document.getElementById("maior").innerHTML = "O maior é " + nro1
    }
    else if (nro2 >= nro1 && nro2 >= nro3){
        document.getElementById("maior").innerHTML = "O maior é " + nro2
    }
    else if (nro3 >= nro1 && nro3 >= nro2){
        document.getElementById("maior").innerHTML = "O maior é " + nro3
    }   
}
function exe5(){
    // recupera os dados do usuário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let selecao = Number(document.getElementById("selecao").value)
    // utilização do escolha
    switch (selecao){
        case 1: document.getElementById("result").innerText = (nro1 + nro2) / 2
                break
        case 2: if (nro1 >= nro2){
                    document.getElementById("result").innerText = nro1 - nro2
                }
                else {
                    document.getElementById("result").innerText = nro2 - nro1
                }
                break
        case 3: document.getElementById("result").innerText = nro1 * nro2
                break
        case 4: if (nro2 != 0){
                    document.getElementById("result").innerText = nro1 / nro2
                }
                else {
                    document.getElementById("result").innerText = "Divisão por zero"
                }
    }
}
function exe6(){
let nro1 = Number(document.getElementById("nro1").value)
let nro2 = Number(document.getElementById("nro2").value)
let selecao = Number(document.getElementById("selecao").value)
switch(selecao){
    case 1: document.getElementById("result").innerText = "A potencia é " + Math.pow(nro1, nro2)
    break
    case 2: document.getElementById("result").innerHTML = "RQ do nro1: " + Math.sqrt(nro1).toFixed(2) + "RQ dp nro2: " + Math.sqrt(nro2).toFixed(2)
    break
    case 3: document.getElementById("result").innerHTML = "RC do nro1: " + Math.cbrt(nro1).toFixed(2) + "RC dp nro2: " + Math.cbrt(nro2).toFixed(2)
    break
    }
}
function exe7(){
    //recuperar os dados do usuario
    let salario = Number(document.getElementById("salario").value)
    if (salario > 500){
        document.getElementById("novo").innerHTML = "Novo salario " + (salario + salario*30/100)
    }
    else {
document.getElementById("novo").innerHTML = "Salario maior ou igual a 500, sem reajuste. "
    }
}
function exe8(){
    // template string
    let salario = Number(document.getElementById("salario").value)
    if(salario < 0){
        document.getElementById("novo").innerHTML = "Salário negativo"
    }
    else if (salario <= 300){
        // Vamos usar template string
        let novoSalario = (salario + salario*35/100)
        document.getElementById("novo").innerHTML = `Novo salario $(novoSalario)`
    }
    else {
        // Vamos usar template string
        document.getElementById("novo").innerHTML = "Novo salario" + (salario + salario*15/100)
    }
}