/*var przycisk = document.getElementById('przycisk');

przycisk.addEventListener('click',function(e) {
    console.log('działa');
    oblicz();
});*/

function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
    var oprocentowanieOpodatkowane;
    var kapital;
        
    /*if (podatek == true) {
        oprocentowanieOpodatkowane = oprocentowanie * 0.81;
    } else {
        oprocentowanieOpodatkowane = oprocentowanie;
    }*/
    oprocentowanieOpodatkowane = podatek ? oprocentowanie * 0.91 : oprocentowanie; // skrócoy ifelse
    
    kapital = wplata * Math.pow((1 + (oprocentowanieOpodatkowane/okresKapitalizacji)), iloscLat * okresKapitalizacji);
    
    return kapital.toFixed(2);
}

function oblicz(e) {
    e.preventDefault();
    var wplata = parseInt(document.getElementById('wplata').value);
    var iloscLat = parseInt(document.getElementById('okres-kapitalizacji').value);
    var okresKapitalizacji = parseInt(document.getElementById('okres-kapitalizacji').value);
    var oprocentowanie = parseInt(document.getElementById('oprocentowanie').value) / 100;
    var podatek = document.getElementById('podatek').checked;
    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    //console.log(wynik);
    
    document.getElementById('wynik').innerHTML = 'Kwota po oprocentowaniu: ' + wynik;
};
