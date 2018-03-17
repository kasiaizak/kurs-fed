// innerHTML i outerHTML - pobieranie
var parFirst = document.getElementById('parFirst');
//console.log(parFirst.innerHTML);
//console.log(parFirst.outerHTML);

// innerHTML - przypisanie wartości
var mainHeader = document.querySelector('h1');
mainHeader.innerHTML = '<span>Nowa zawartość h1 wstawiona w span</span>';

// zmiana styli
mainHeader.style.color = 'red';
mainHeader.style.backgroundColor = 'yellow'; //cammelCase

// przypisanie klasy - ustawia na nowo atrybuty (istniejace klasy sa usuwane)
mainHeader.className = 'headingtext';

// pobranie klas elementu
console.log(mainHeader.className);

// classList - dodaje klasę do istniejących
mainHeader.classList.add('nowa-klasa');

//  classList - usuwanie klasy
mainHeader.classList.remove('headingtext');