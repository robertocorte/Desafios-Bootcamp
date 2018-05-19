var numSeq = [];
numSeq = prompt('insert your number sequence');
numSeq = numSeq.split("");
var save = "";
var count = 0;
var newSeq = [];

for (i = 0; i < numSeq.length; i++) {
    save = numSeq[i]
    for (j = 0; j < numSeq.length; j++) {
        if (save == numSeq[j]) {
            count++;
        }
    }
    newSeq[i] = numSeq[i] + ": "+ count + " repetições";
    count = 0;
}

//como não encontrei outra solução, decidi colocar os valores novos num novo array e deixar os repetidos no antigo

var seqUnica = [];
for (i = 0; i < newSeq.length; i++) {
    if (seqUnica.indexOf(newSeq[i]) == -1) {
        seqUnica.push(newSeq[i]);
    }
}
alert(seqUnica);

