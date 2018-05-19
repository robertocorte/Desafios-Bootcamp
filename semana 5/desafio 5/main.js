
var a = 0;
var b = 0;
var c = 0;

alert("Insira 3 numeros");

a = parseInt(prompt("Insira o primeiro número"));
b = parseInt(prompt("Insira o segundo número"));
c = parseInt(prompt("Insira o último número"));

if (a > b && a > c) {
    if (b > c) {
        alert("( "+a+", "+b+", "+c+" )");
    } else {
        alert("( "+a+", "+c+", "+b+" )");
    }
}
if (b > a && b > c) {
    if (a > c) {
        alert("( "+b+", "+a+", "+c+" )");
    } else {
        alert("( "+b+", "+c+", "+a+" )");
    }
}
if (c > a && c > b) {
    if (a > b) {
        alert("( "+c+", "+a+", "+b+" )");
    } else {
        alert("( "+c+", "+b+", "+a+" )");
    }
}
