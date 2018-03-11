// instrukcja if

var zmienna1 = 'Kot';
var zmienna2 = 'Pies';

if (zmienna1 != zmienna2) {
    console.log('Spełniam warunek');
}


// instrukcja else if
var mojaLiczba = 111;

if (mojaLiczba == 5) {
    console.log('Moja liczba to 5');
} else if (mojaLiczba == 12) {
    console.log('Moja liczba to 12');
} else if (mojaLiczba == 65) {
    console.log('Moja liczba to 90');
} else { // else niewymagany
    console.log('Moja liczba ma inną wartość')
}


// instrukcja switch
switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony');
        break;
    case 'zielony':
        console.log('Kolor zielony');
        break;
    default:
        console.log('Nie znalazłem dopasowania koloru');
}
