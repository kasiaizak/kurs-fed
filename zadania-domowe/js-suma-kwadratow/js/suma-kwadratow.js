function sumaKwadratow(tablica) {
    var dlugoscTablicy = tablica.length;
    var suma = 0;
    for (var i = 0; i < dlugoscTablicy; i++) {
        suma += Math.pow( tablica[i], 2);
    }
    console.log(suma);
    return suma;
}

sumaKwadratow([1, 2, 3, 4, 5]);