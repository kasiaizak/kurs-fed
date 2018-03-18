function pobierzImie(event) {
    event.preventDefault();
    var dane = document.getElementsByTagName('input');
    console.log(dane[0].value + ' ' + dane[1].value);
    /*var inputs = document.getElementsByTagName('input');
    var imie = inputs[0].value;
    var nazwisko = inputs[1].value;
    console.log(imie + ' ' + nazwisko);*/
}