window.onload = function () {

    var klawisz = document.getElementsByClassName('klawisz');
    var wynik = document.getElementById('wynik');
    var del = document.getElementById('del');

    for (var i = 0; i < klawisz.length; i += 1) {
        if (klawisz[i].innerHTML === '=') {
            klawisz[i].addEventListener("click", oblicz(i));
        } else {
            klawisz[i].addEventListener("click", dodajWartosc(i));
        }
    }

    del.onclick = function () {
        wynik.innerHTML = '';
    };


    function dodajWartosc(i) {
        return function () {
            if (klawisz[i].innerHTML === '/') {
                wynik.innerHTML += '/';
            } else if (klawisz[i].innerHTML === '*') {
                wynik.innerHTML += '*';
            } else if (klawisz[i].innerHTML === '-') {
                wynik.innerHTML += '-';
            } else if (klawisz[i].innerHTML === '+') {
                wynik.innerHTML += '+';
            } else if (klawisz[i].innerHTML === '%') {
                wynik.innerHTML += '%';
            } else {
                wynik.innerHTML += klawisz[i].innerHTML;
            }
        };
    }

    function oblicz(i) {
        return function () {
            wynik.innerHTML = eval(wynik.innerHTML);
        };
    }
};
