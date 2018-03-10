// funkcja bez parametrów
function wyswietlWKonsoli() {
    console.log('Katarzyna Izak');
}

//wyswietlWKonsoli();

// funkcja z parametrami

function wyswietlWKonsoliParm(imie, nazwisko) {
    console.log(imie + " " + nazwisko);
}

/*
wyswietlWKonsoliParm('Katarzyna', 'Izak');
wyswietlWKonsoliParm('Adam', 'Nowacki');
wyswietlWKonsoliParm('Kinga', 'Korycka');
wyswietlWKonsoliParm('Adrian', 'Bąk');
*/

// zwracanie wartosci przez funkcję
function obliczPodatek(kwota, procentPodatek) {
    var wynik = kwota * (procentPodatek / 100);
    return wynik.toFixed(2); // .toFixed zaokrągli do 2 miejsc po przecinku
}

var x = obliczPodatek(4999, 10);
var y = obliczPodatek(2500, 30);
var z = obliczPodatek(3699, 23);

console.log("Wysokość obliczonego podatku wynosi: " + x, y, z);
