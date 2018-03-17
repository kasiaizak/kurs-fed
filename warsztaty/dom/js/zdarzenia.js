var paragraf = document.getElementById('par2');

/*// sposób 1
function obsluzZdarzenie(event) {
    //console.log('click');
    console.log(event.type);
}

paragraf.onclick = obsluzZdarzenie;


// sposób 2
paragraf.onclick = function(e) {
    console.log('Do obsługi zdarzenia przypisana funkcja anonimowa');
}*/



/*var counter = 0;
paragraf.addEventListener('mouseenter', function (event) {
    counter++;
    console.log(event.type);
    console.log('Zdarzenie wywołane' + counter + ' raz');
});*/



/*var title = document.getElementById('main-header');
title.addEventListener('mouseenter',function(){
    title.style.fontSize = '70px'; 
});

title.addEventListener('mouseleave',function(){
    title.style.fontSize = '20px';
})*/



function bodyColor() {
    console.log(event);
    document.body.style.backgroundColor = 'red';
}

var title = document.getElementById('main-header');

title.addEventListener('click', bodyColor);

/*// usunięcie obsługi zdarzeń
title.removeEventListener('click', bodyColor);*/


// blokowanie domyślnego działania elementów
document.querySelector('.link1').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Kliknąłem link klasy .link1')
});
