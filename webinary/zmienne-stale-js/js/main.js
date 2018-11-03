console.log('Cześć, mam na imię Kasia');

/* Deklaracja i definiowanie zmiennych */
let name; //ES6
var number; //ES5

let one, two, thre;
console.log(name);
console.log(number);

name = 'Kasia';
console.log(name);

name = 'Gabrysia';
console.log('Cześć, mam na imię ' + name);

let surname = 'Izak';
console.log(surname);

number = 15;
console.log(number);

var number = 20;
console.log(number);

// let name = 'Adrian'; w ES6 nie można ponownie deklarować zmiennej, oczywiście można przypisywać nową wartość, ale bez ponownej deklaracji.//

/* Stałe w JavaScript */
const numberOfMonths = 12;
console.log(numberOfMonths);

//numberOfMonths = 6;
//console.log(numberOfMonths);

/* Zasięg zmiennych */
function example() {
    let age = 35;
    console.log(age);
    word = 'Słowo';
}
example();
//console.log(age);
console.log(word);

/* Hoisting zmiennych */
console.log(num);
//console.log(newNumber);

var num;
let newNumber;
console.log(newNumber);