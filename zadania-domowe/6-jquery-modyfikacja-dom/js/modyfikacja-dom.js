 $(function () {
    $('#ostatni-element').on('click', function (event) {
        var ostatni = $('p:last').text();
        $('p:last').remove();
        $('p:first').before('<p>' + ostatni + '</p>');
    });
    $('#pierwszy-element').on('click', function (event) {
        var pierwszy = $('p:first').text(); 
        $('p:first').remove();
        $('p:last').after(('<p>' + pierwszy + '</p>'))
    });
});