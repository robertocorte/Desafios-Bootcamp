function getQuote(quote) {
    var blank = " ";
    var count = 0;
    for (var i = 0; i < quote.length; i++) {
        if (quote.charAt(i) === blank) {
            count++;
        }
    } return count;
}

var quote = prompt("Type a quote.");
alert("Esta frase tem " + getQuote(quote) + " espaços");