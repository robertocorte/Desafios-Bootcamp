var frase = prompt("Insere uma frase para ser encriptada. ATENCAO: USAR APENAS LETRAS MAIUSCULAS SEM ESPAÇOS, ex. OLAMUNDO");
var result = "";
var store = [];

for (var i = 0; i < frase.length; i++) {
    store[i] = frase.charCodeAt(i);
}

for (var i = 0; i < frase.length; i++) {
    if(store[i] < 78) {
        store[i] = String.fromCharCode(store[i] + 13);
    } else {
        store[i] = String.fromCharCode(store[i] - 13);
    }
}

alert(store.join(''));





//alert(result);