var slideShow = $('.slide-show');
var slideCount = $('.single-slide').length;
var slideWidth = 100 / slideCount;
var slideIndex = 0;

// ustawiam dynamiczną szerokość kontenera ze slajdami, zależną od ilości slajdów
slideShow.css({
    width: slideCount + '00%'
});

// ustawienie szerokości i pozycjonowanie wewnętrznych kontenerów
slideShow.find('.single-slide').each(function (index) {
    $(this).css({
        width: slideWidth + '%',
        marginLeft: slideWidth * index + '%'
    });
});

// przypisywanie zdarzeń do przycisków nawigacji
$('.next-slide').on('click', function () {
    console.log('klik naprzód');
});

$('.prev-slide').on('click', function () {
    console.log('klik wstecz');
});
