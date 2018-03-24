$(function () {
    $('#count-sum').on('click', function (event) {
        var suma = 0;
        var wyplata = document.getElementsByClassName('salary');
        var iloscWyplat = wyplata.length;
        for (var i = 0; i < iloscWyplat; i++) {
            suma += parseInt(wyplata[i].innerText); // zmienia stringa na integer
        }
        //$('#sum').empty;
        //$('#sum').text(suma);
        //console.log(document.getElementsByClassName('salary')[1].innerText);
        console.log(suma);
    });
});