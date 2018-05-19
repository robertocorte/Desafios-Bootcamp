var name = prompt("Como te chamas? Primeiro e último nome");
var leaveQuote = prompt("Queres deixar uma quote para a humanidade refletir um dia sobre tais sábios ensinamentos?").toLowerCase();

var test = true;
while (test) {
    if (leaveQuote == 'yes' || leaveQuote == 'sim') {
        alert("Vais dizer-me, palavra a palavra, a tua quote, que deve conter 7 palavras.");
        var getQuote = "";
        for (var i = 0; i < 6; i++) {
            var nWord = prompt("Qual é a " + (i + 1) + " palavra?"); 
            getQuote += nWord+" ";
        }
        getQuote += ". - " + name;
        document.write("<h2>Aqui está a tua quote: <br>'" + getQuote+"'</h2>");
        test = false; 
    } else if (leaveQuote == 'no' || leaveQuote == 'não') {
        test = false;
        alert("Até à próxima, a humanidade certamente perderá...");
    } else {
        alert("Apenas aceitamos sim ou não como resposta");
        leaveQuote = prompt("Insere sim ou não.");
    }
}