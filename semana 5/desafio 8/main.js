/*
a sequencia tem de seguir o seguinte padrao: 0,1,1,2,3,5,8,13...
x[n] = x[n-1]+x[n-2];
*/

var fibonacciSequence = [0, 1];
var html ="";

//console log inicial
console.log("The 1rst number of the sequence is " + fibonacciSequence[0] + ".");
console.log("The 2nd number of the sequence is " + fibonacciSequence[1] + ".");

//loop para criar sequencia || x[n] = x[n-1] + x[n-2] || print console, acrescenta à string html
for (var n = 2; n < 60; n++) {
    fibonacciSequence[n] = fibonacciSequence[n - 1] + fibonacciSequence[n - 2];
    console.log("The " + (n + 1) + "th number of the sequence is " + fibonacciSequence[n] + ".");
    html += "<p>The " + (n + 1) + "th number of the sequence is " + fibonacciSequence[n] + "</p>";
}

//print da string html para a página
var html = "<p>The 1rst number of the sequence is " + fibonacciSequence[0] + ".</p>";
html += "<p>The 2nd number of the sequence is " + fibonacciSequence[1] + ".</p>";
document.write(html);
