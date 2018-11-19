@@ -0,0 +1,21 @@
var liczba;

function fibonacci(liczba) {
    if (liczba === 0) {
        return 0;
    } else if (liczba === 1 || liczba === 2) {
        return 1;
    } else {
        var f1 = 1;
        var f2 = 1;
        var fn = 0;
        for (var i = 0; i < liczba - 2; i++) {
            fn = f1 + f2;
            f1 = f2;
            f2 = fn;
        }
        return fn;
    }
}

console.log(fibonacci(6));