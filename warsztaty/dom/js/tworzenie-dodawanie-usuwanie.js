// pobieram istniejący węzeł o id output
var istniejacyWezel = document.getElementById('output');
// sprawdzam czy udało się go pobrać
//console.log(istniejacyWezel);

// tworzę nowy element html
var newElement = document.createElement('p');

// tworzę treść paragrafu
var newElementContent = document.createTextNode('Tutaj tworzę treść paragrafu, o!');

// wstawiam nowoutworzony tekst do nowoutworzonego paragrafu
newElement.appendChild(newElementContent);

// dodaję do paragrafu atrybut class='textpar'
newElement.setAttribute('class','textpar');

console.log(newElement);

// wstawiam nasz przygotowany paragraf do div#output
istniejacyWezel.appendChild(newElement);

// usuwanie elementów z dokumentów
//istniejacyWezel.parentElement.removeChild(istniejacyWezel);
//document.getElementById('parFirst').removeChild(istniejacyWezel); // to samo innym zapisem


// insertBefore
var link = document.getElementsByClassName('superlink')[0];
var br = document.createElement('br');
//link.parentElement.insertBefore(br,link);
link.parentElement.insertBefore(br,link.nextElementSibling);

// usuwanie atrybutów
link.removeAttribute('class')