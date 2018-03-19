class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    opiszKsiazke() {
        var czyPrzeczytana;

        if (this.czyPrzeczytana === true) {
            czyPrzeczytana = 'została';
        }
        else {
            czyPrzeczytana = 'nie została';
        }
        return console.log('Książka ma tytuł "' + this.tytul + '", autorem jest ' + this.autor + ' i ' + czyPrzeczytana + ' przeczytana.');
    }
}

var ksiazka1 = new Ksiazka('Teoria Portali', 'Martin Lechowicz', true);
ksiazka1.opiszKsiazke();

var ksiazka2 = new Ksiazka('Świat lodu i ognia', 'George R.R. Martin', false);
ksiazka2.opiszKsiazke();

var ksiazka3 = new Ksiazka('Raspberry Pi. Przewodnik użytkownika', 'Eben Upton oraz Gareth Halfacree', false);
ksiazka3.opiszKsiazke();
var biblioteczka = [ksiazka1, ksiazka2, ksiazka3];

//function iloscPrzeczytanych(biblioteczka) {
//    var czyPrzeczytana
//}
