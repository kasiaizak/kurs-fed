function sortujString(string) {
    var tablicaZeStringa = string.split('');
    var sortowanie = tablicaZeStringa.sort();
    var laczenie = sortowanie.join('');
    return laczenie;
}

var napis = sortujString('Akademia108');
console.log(napis);
