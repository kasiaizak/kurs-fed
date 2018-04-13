 $(function () {
    $('#ostatni-element').on('click', function (event) {
        var ostatni = $('p:last').html();
        $('p:last').remove();
        $('p:first').before('<p>' + ostatni + '</p>');
    });
    $('#pierwszy-element').on('click', function (event) {
        var pierwszy = $('p:first').html(); 
        $('p:first').remove();
        $('p:last').after(('<p>' + pierwszy + '</p>'))
    });
});