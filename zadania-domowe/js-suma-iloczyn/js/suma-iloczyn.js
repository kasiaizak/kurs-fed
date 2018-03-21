function sumaIloczyn(tablica) {
    var dlugoscTablicy = tablica.length;
    var suma = 0;
    var iloczyn = 1;
    for (var i = 0; i < dlugoscTablicy; i++) {
        suma += tablica[i];
        iloczyn *= tablica[i];
    }
    console.log('Suma podanych liczb wynosi: ' + suma + '\nIloczyn podanych liczb wynosi: ' + iloczyn);
}

sumaIloczyn([1, 2, 3, 4, 5, 6]);