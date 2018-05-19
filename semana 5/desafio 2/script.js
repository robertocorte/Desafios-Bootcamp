var movie = [
	{
		nome: "pulp fiction",
		data: "01-02-1990",
		ator: "john travolta",
		género: "drama"
	},
	{
		nome: "memento",
		data: "01-02-1995",
		ator: "guy richie",
		género: "drama"
	},
	{
		nome: "shutter island",
		data: "01-02-1990",
		ator: "leonardo dicaprio",
		género: "drama"
	},
	{
		nome: "departed",
		data: "01-02-1990",
		ator: "john travolta",
		género: "drama"
	},
	{
		nome: "fight club",
		data: "01-02-1990",
		ator: "john travolta",
		género: "drama"
	},
	{
		nome: "inception",
		data: "01-02-1990",
		ator: "john travolta",
		género: "drama"
	}
];

function getMovie(filme) {
	for (var i = 0; i < movie.length; i++) {
		if (filme == movie[i].nome) {
			return alert(movie[i].data);
		}
	} alert('O filme não existe.');
}

//
var filme = prompt("Nome do filme");
getMovie(filme);

