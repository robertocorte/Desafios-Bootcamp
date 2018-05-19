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
gapBinario(20); //  gap = 1
gapBinario(2147483647); //  não tem gap
gapBinario(17); //  gap = 3
gapBinario(1147483647); //  gap = 3
