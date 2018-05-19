
//pede tamanho da turma e transforma valor em numero
var turma = parseInt(prompt("Quantos alunos tem a turma?"));
var notasAlunos = [];
var somaTurma = 0;

//pede notas de cada aluno e guarda-as no array
for ( var i = 0; i < turma; i++ ) {
    notasAlunos.push(parseInt(prompt("Insira a nota do "+(i+1)+"º aluno.")));
}
//pede nota de um aluno aleatorio
var mediaAluno = notasAlunos[parseInt(prompt("Insira o nº aluno para saber a sua média."))-1];

//soma notas dos alunos
for ( var i = 0; i < turma; i++ ) {
    somaTurma += notasAlunos[i]
}
var mediaTurma = somaTurma/turma;
var variação = Math.round(((mediaAluno-mediaTurma)/mediaTurma*100));

alert("A média da turma é "+mediaTurma+" e a variação da nota do aluno à média da turma é de "+variação+"%.");