var liczba = 0;

function fibonacci(liczba) {
    if (liczba === 0) {
        return 0;
    }
    else if (liczba === 1 || liczba === 2) {
        return 1;
    }
    else {
        var F1 = 1;
        var F2 = 1;
        var Fn = 0;
        for (var i = 0; i < liczba - 2; i++) {
            Fn = F1 + F2;
            F1 = F2;
            F2 = Fn;
        }
        return Fn;
    }
}

fibonacci(liczba);

/*Napisz funkcję, która zwraca wartość n-tego elementu ciągu fibbonaciego. Wynik działań i funkcji wyświetl w konsoli.

Jako parametr funkcja przyjmuje n - czyli n-ty element ciągu fibbonaciego.

Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

Podpowiedź przed wysłaniem zadania do sprawdzenia:
- znajdź w internecie opis merytoryczny ciągu fibbonaciego*/
