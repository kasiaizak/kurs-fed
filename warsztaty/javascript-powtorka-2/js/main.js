$(document).ready(function () {
    function silnia(n) { /* funkcja rekurencyjna - sama się wywołuje */
        if (n == 0) {
            return 1;
        } else {
            return n * silnia(n - 1)
        }
    }
    
    function silnia2(n) {
        var wynik = 1;
        for (var i=1; i<=n; i++) {
            wynik*= i; //wynik = wynik * i;
        }
        return wynik;
    }

    console.log(silnia(3));
})
