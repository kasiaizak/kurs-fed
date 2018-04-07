//suma wypłąt czystym js
function sumaWyplat(selektor) {
    var elementy = document.querySelectorAll(selektor);
    var ilosc = elementy.length;
    var suma = 0;

    for (var i = 0; i < ilosc; i++) {
        suma += parseInt(elementy[i].innerHTML);
    }

    //console.log(suma);
    return suma;
}

function wyswietlWynik(wynikDoWyswietlenia) {
    var div = document.createElement('div');
    var txt = document.createTextNode(wynikDoWyswietlenia + ' zł');
    div.appendChild(txt);
    
    document.body.appendChild(div);
}

var wynikObliczenia = sumaWyplat('p');
wyswietlWynik(wynikObliczenia);
