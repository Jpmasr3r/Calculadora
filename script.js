//#region Variaveis
var nAtual = 0;
var resul, operação;
var nOutro = "nada";
var nPonto = false;
var vN1 = 0
//#endregion

//#region Id
const nVisor = document.getElementById("numero");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const vOperação = document.getElementById("operação");
//#endregion



setInterval(function(){
    if(nAtual > 99999999999.00){
        nAtual = 0;
        nPonto = false
        nOutro = "nada"
    }
    nVisor.innerHTML =  nAtual;
    if(nOutro != "nada") {
        n1.innerHTML = nOutro
        n2.innerHTML = vN1
    }

    if(operação == "soma"){
        resul = Number(nOutro)+Number(nAtual)
        
    }

    if(operação == "subtração"){
        resul = Number(nOutro)-Number(nAtual)
    }

    if(operação == "multiplicação"){
        resul = Number(nOutro)*Number(nAtual)
        
    }

    if(operação == "divisão"){
        resul = Number(nOutro)/Number(nAtual)
        
    }

},1)

function soma(){
    if(nOutro == "nada"){
        nOutro = nAtual
        nAtual = 0
        operação = "soma"
        console.log(operação)
        nPonto = false
        vOperação.innerHTML = "+"
    }
}

function subtração(){
    if(nOutro == "nada"){
        nOutro = nAtual
        nAtual = 0
        operação = "subtração"
        console.log(operação)
        nPonto = false
        vOperação.innerHTML = "-"
    }
}

function multiplicação(){
    if(nOutro == "nada"){
        nOutro = nAtual
        nAtual = 0
        operação = "multiplicação"
        console.log(operação)
        nPonto = false
        vOperação.innerHTML = "x"
    }
}

function divisão(){
    if(nOutro == "nada"){
        nOutro = nAtual
        nAtual = 0
        operação = "divisão"
        console.log(operação)
        nPonto = false
        vOperação.innerHTML = "/"
    }
}

function botão1(){
    if(nAtual == 0){
        nAtual = 1
    }else{
        nAtual+="1"
    }
}

function botão2(){
    if(nAtual == 0){
        nAtual = 2
    }else{
        nAtual+="2"
    }
}

function botão3(){
    if(nAtual == 0){
        nAtual = 3
    }else{
        nAtual+="3"
    }
}

function botão4(){
    if(nAtual == 0){
        nAtual = 4
    }else{
        nAtual+="4"
    }
}

function botão5(){
    if(nAtual == 0){
        nAtual = 5
    }else{
        nAtual+="5"
    }
}

function botão6(){
    if(nAtual == 0){
        nAtual = 6
    }else{
        nAtual+="6"
    }
}

function botão7(){
    if(nAtual == 0){
        nAtual = 7
    }else{
        nAtual+="7"
    }
}

function botão8(){
    if(nAtual == 0){
        nAtual = 8
    }else{
        nAtual+="8"
    }
}

function botão9(){
    if(nAtual == 0){
        nAtual = 9
    }else{
        nAtual+="9"
    }
}

function botão0(){
    if(nAtual == 0){
        nAtual = 0
    }else{
        nAtual+="0"
    }
}

function ponto(){
    if(nPonto == false){
        nAtual+="."
        nPonto = true
    }
}

function limpar(){
    nAtual = 0
    nOutro = "nada"
    nPonto = false
    n1.innerHTML = "0"
    n2.innerHTML = "0"
    vOperação.innerHTML = "+"
    vN1 = 0
    resul = undefined
}

function igual(){
    vN1 = nAtual
    nAtual = resul
}

