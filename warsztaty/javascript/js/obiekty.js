//var name = "Tu jestem poza obiektem";

var obiekt = {
    name: 'Pierwszy mój obiekt',
    height: 180,
    print: function () {
        //console.log(name);
        console.log(this.name);
    }
}

//obiekt.print();



// dodawanie nowej właściwości
obiekt.age = 32;

// dodawanie nowej metody
obiekt.showAge = function () {
    console.log(this.age);
}
obiekt.showAge();
