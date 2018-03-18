function odwrocString(string) {
    var tablicaZeStringa = string.split('');
    var odwrocenie = tablicaZeStringa.reverse();
    var laczenie = odwrocenie.join('');
    return laczenie;
}

var napis = odwrocString('Akademia108');
console.log(napis);
