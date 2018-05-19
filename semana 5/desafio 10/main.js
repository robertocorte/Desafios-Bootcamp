var usarCalc = prompt("Olá. Queres usar a calculadora?").toLowerCase();
var a = 0;
var b = 0;
var result = 0;
var used = false;
/*
function askValue1 () {
    a = parseInt(prompt("Insere o primeiro valor."));
}
function askValue2 () {
    b = parseInt(prompt("Insere o segundo valor."));
}
*/

if (usarCalc == 'não' || usarCalc == 'nao') {
    alert("Até à próxima.");

} else if (usarCalc == 'sim') {
    used = true;
    var operadorMat = prompt("Que tipo de operação queres realizar? (Coloca um destes símbolos matemáticos: | + | - | / | * | % | cos | log |");
    var operadorLista = ["+", "-", "/", "*", "%", "cos", "log"];

    //testa se operador inserido pelo user está presente na lista de operadores possíveis: devolve true/false 
    if (operadorLista.includes(operadorMat)) {
        if (operadorMat == '+') {
            a = parseInt(prompt("Insere o primeiro valor."));
            b = parseInt(prompt("Insere o segundo valor."));
            result = a + b;
        } else if (operadorMat == '-') {
            a = parseInt(prompt("Insere o primeiro valor."));
            b = parseInt(prompt("Insere o segundo valor."));
            result = a - b;
        } else if (operadorMat == '*') {
            a = parseInt(prompt("Insere o primeiro valor."));
            b = parseInt(prompt("Insere o segundo valor."));
            result = a * b;
        } else if (operadorMat == '/') {
            a = parseInt(prompt("Insere o primeiro valor."));
            b = parseInt(prompt("Insere o segundo valor."));
            result = a / b;
        } else if (operadorMat == '%') {
            a = parseInt(prompt("Insere o primeiro valor."));
            b = parseInt(prompt("Insere o segundo valor."));
            result = a % b;
        } else if (operadorMat == 'cos') {
            a = parseInt(prompt("Insere o número para calculares o seu cos."));
            result = Math.cos(a); 
        } else if (operadorMat == 'log') {
            a = parseInt(prompt("Insere o número para calculares o seu log."));
            result = Math.log(a);
        }
        alert("O resultado da operação é "+result);
        
        if (used == true) {
            alert("Obrigado por ter usado a nossa calculadora");
        }
    } else {
        alert("Pedimos desculpa mas não temos essa operação.");
    }
} else {
    alert("Não percebemos o que queres dizer... :( ");
}