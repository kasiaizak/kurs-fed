// pobranie elementu po id - tylko jeden element
var parFirst = document.getElementById('parFirst');
//console.log(parFirst);

// pobranie elementów po klasie - kolekcja elementów
var elementLink = document.getElementsByClassName('link');
//console.log(elementLink);
//console.log(elementLink.length);

// pobranie elementów po tagu
var elementTag = document.getElementsByTagName('p');
//console.log(elementTag);

// pobranie wszystkich elementów po selektorze .superlink
var elementSuperlink = document.querySelectorAll('.superlink');
//console.log(elementSuperlink);

// pobranie pojedynczego elementu po selektorze id
var parSecond = document.querySelector('#parSecond');
//console.log(parSecond);

var mojeLinki = document.querySelectorAll('.link');
console.log(mojeLinki[1]);
/*for (var i = 0; i < mojeLinki.length; i++) {
    console.log('To mój link nr ' + (i +1) );
    console.log(mojeLinki[1]) ;
    console.log('--------------------'); 
}*/


// pętla forEach działa na kolekcji pobranej za pomocą metody document.querySelectorAll()
/*mojeLinki.forEach(function (element, index) {
    console.log(element);
})*/
