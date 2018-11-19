var animacja = $('#przycisk');

animacja.on('click', function () {
    $('.kwadrat').animate({
        'margin-left': '100px',
        'width': '100px',
        'height': '100px'},
    3000,
    function () {
        $('.kwadrat').animate({
            'backgroundColor': 'blue'},
        5000,
        function () {
        $('h2').css({visibility: 'inherit'})});
    });
});
