function desenharPiramide(linhas) {
    for (var i = 1; i <= linhas; i++) {
        var piramide = "";
        for (var j = 1; j <= linhas - i; j++) {
            piramide += "  ";
        }
        for (var n = 1; n <= i; n++) {
            piramide += "  * ";
        }
        console.log(piramide);
    }
}

desenharPiramide(10);