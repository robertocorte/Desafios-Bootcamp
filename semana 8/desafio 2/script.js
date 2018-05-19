/*  Binary gap = soma de 0's entre 1's num número binário. Os 0's têm de estar entre os 1's. 
    Exemplo:
    Para o número:  19 = 10011, o binary gap é de 2
    Para o número 1256 = 10011101000, existem 3 gaps: um de 2, um de 1, e outro de 3.
*/

/*  O objectivo do exercício é:
    1.  Criar uma função que determine o maior binary gap dado um determinado número N
    1.1 Antes disso, definir uma função que faça a conversão de numero base 10 para base 2
    2.  Se houver gap, conta o número de 0's no gap maior e retorna a soma dos 0's
    3.  Se não houver gap, retorna '0'
*/

//  Implementei o algoritmo presente neste video: https://www.youtube.com/watch?v=XdZqk8BXPwg

function decimalToBinary(N) {
    var store = [];
    store[0] = N;
    var binaryNumber = "";
    var i = 1;
    var restoNum = true;
    
    while (restoNum) {
        //divide o numero base 10 por 2, arredonda para baixo e guarda-o no array[i]
        store[i] = Math.floor(N / 2);
        N = store[i]
        if (store[i] === 1) {
            restoNum = false;
        }
        i++;
    }
    
    //inverte a ordem dos elementos do array
    store.reverse();
    //verifica se elemento do array é par ou impar. Se impar, string recebe 1. Se par, recebe 0.
   
    for (var j = 0; j < store.length; j++) {
        if (store[j] % 2 == 0) {
            binaryNumber += "0";
        } else if (store[j] % 2 != 0) {
            binaryNumber += "1";
        }
    }
    alert(binaryNumber);
}

var N = parseInt(prompt("Insert a base 10 number to get it converted into binary"));
decimalToBinary(N);

// solução sem criar função para converter numero, ou seja, usando método toSting(2)

function gapBinario(N) {
    var numBinario = N.toString(2); // faz conversão base 10 para base 2 (binário)
    var conta = 0; //conta numero de 0's ao iterar a string
    var guardaMax = 0; // guarda numero max de 0's ao iterar a string
    for (var i = 0; i < numBinario.length; i++) {
        if (numBinario[i] == "0") {
            conta++;
        }
        if (numBinario[i] == "1") {
            if (guardaMax < conta) {
                guardaMax = conta;
            }
            conta = 0;
        }
    }
    return alert(guardaMax);
}
gapBinario(15); //  não tem gap
gapBinario(20); // não tem gap
gapBinario(2147483647); // não tem gap
gapBinario(17); // gap = 3
gapBinario(1147483647); // gap =3;



