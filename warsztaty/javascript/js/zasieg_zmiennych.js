/*
var zmiennaGlobalna = "Tak jestem zmienną globalbą i jestem widoczna w funkcjach";

function wyswietlZmienna() {
    //console.log(zmiennaGlobalna)
    var zmiennaLokalna = "Tak! Zmienna lokalna to ja. Przestrzeń globalna mnie nie zobaczy.";
}

//wyswietlZmienna(zmiennaGlobalna);
wyswietlZmienna();
console.log(zmiennaLokalna);
*/



var zmienna = "Zmienna globalna";

function pokazZmienna() {
    var zmienna = "Zmienna lokalna"; // usuwając var zmieniamy zmienną globalną wewnątrz funkcji
    console.log(zmienna);
}

//pokazZmienna();

console.log(zmienna);
