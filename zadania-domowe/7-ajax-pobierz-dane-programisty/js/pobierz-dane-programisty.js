var przycisk = document.getElementById('przycisk');

przycisk.addEventListener('click', function (event) {
    event.preventDefault();
    $.getJSON(
        'https://katarzynaizak.github.io/kurs-fed/zadania-domowe/7-ajax-pobierz-dane-programisty/dane-programisty.php',
        function (dane) {
            $('body').append('<div id="dane-programisty"></div>');
            $('#dane-programisty').prepend('<p>Imię: ' + dane.imie + '</p>');
            $('#dane-programisty').append('<p>Nazwisko: ' + dane.nazwisko + '</p>');
            $('#dane-programisty').append('<p>Zawód: ' + dane.zawod + '</p>');
            $('#dane-programisty').append('<p>Frima: ' + dane.firma + '</p>');
        })

});
