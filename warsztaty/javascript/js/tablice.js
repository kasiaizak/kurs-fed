var imiona = ['Adam', 'Marta', 'Paweł', 'Michał', 'Kasia', 'Sandra'];

console.log(imiona);
console.log(imiona[0], imiona[3]);

// dodawanie elementów do tablicy - na końcu
imiona[6] = 'Mikołaj';
imiona[7] = 'Kinga';
imiona.push('Kamil', 'Krzysztof', 'Anna');
imiona.push('Marcin');
console.log(imiona);

// usuwanie elementów tablicy z końca
imiona.pop();
console.log(imiona);
imiona.pop();
imiona.pop();
console.log(imiona);

// dodawanie elementów tablicy na początku
imiona.unshift('Sebastian');
imiona.unshift('Małgosia');
console.log(imiona);

// usuwanie elementów z początku tablicy
imiona.shift();
console.log(imiona);

var usunietyElement = imiona.shift(); //usunie i pokaze co usuwamy
console.log(usunietyElement);
console.log(imiona);

// sprawdzanie "długości" tablicy
var iloscElementowTablicy = imiona.length;
console.log(iloscElementowTablicy);

var textZTablicy = imiona[0] + ', ' + imiona[1] + ', ' + imiona[2];
console.log(textZTablicy);

// rozbijanie tablicy na ciąg tekstowy
var elementyTablicyString = imiona.join(", --- , ");
console.log(elementyTablicyString);

// "odwrócenie tablicy"
imiona.reverse();
console.log(imiona);

// sortowanie
imiona.sort();
console.log(imiona);

// sprawdzenie czy wartość w tablicy istnieje
console.log(imiona.indexOf('Sandra'));

// doczytać o wyrażeniach regularnych np. http://kursjs.pl/kurs/regular.php

// usuwanie konkretnej wartości
imiona.splice(1,1); //od któego elementu i ile elementów
console.log(imiona);