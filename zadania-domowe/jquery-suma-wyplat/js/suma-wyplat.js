$(function () {
    $('#count-sum').on('click', function (event) {
        var suma = 0;
        var wyplata = document.getElementsByClassName('salary');
        var iloscWyplat = wyplata.length;
        for (var i = 0; i < iloscWyplat; i++) {
            suma += wyplata[i].innerText;
        }
        //$('#sum').empty;
        //$('#sum').text(suma);
        //console.log(document.getElementsByClassName('salary')[1].innerText);
        console.log(wyplata.length);
        console.log(wyplata[0].innerText);
        console.log(wyplata[1].innerText);
        console.log(wyplata[2].innerText);
        console.log(wyplata[3].innerText);
        console.log(wyplata[4].innerText);
        console.log(suma);
    });
});