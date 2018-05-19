//function to test each number induvidually
function testePar(num) {
    //split string into individual values in order to iterate
    input = input.split("");
    for (var i = 0; i < input.length; i++) {
        //test par = if division by 2 of first and second numbers iterated = rest 0, then add "-"" to the first number 
        if (num[i] % 2 === 0 && num[i + 1] % 2 === 0) {
            num[i] += "-";
            //test odd = if rest!0, then add # to the first number
        } else if (num[i] % 2 === 1 && num[i + 1] % 2 === 1) {
            num[i] += "#";
        }
    }
    //after the loop return the resulting string and concatenate them
    return num.join("");
}

var input = prompt("Insere o teu numero de telefone");
alert(testePar(input));

