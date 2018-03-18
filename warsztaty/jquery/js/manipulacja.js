$(function(){
   
    // pobieranie tekstu
    var textParagrafId = $('#paragraf').text();
    //console.log(textParagrafId);
    
    // ustawienie tekstu
    $('#paragraf').text('Nowy text ustawiony metodą text()');
    
    // dodawanie HTML'a - zmienia istniejącą treść
    $('.paragrafnext').html('<strong>Tutaj nowa teść HTML</strong>');
    
    // dodawanine treści na końcu selektora
    $('.paragrafnext').append('<br>Nowa treść na końcu selektora');
    
    // dodawanie treści za selektorem
    $('.paragrafnext').after('<h6>Nowy element za selektorem</h6>');
    
    // usuwanie elementu wraz z zawartością
    $('.paragrafnext').remove();
    
    // usuwanie tylko zawartości elementu
    $('div').empty();
    
    // dodawanie pojedynczego stylu css
    //$('div').css('bacground-color', 'red');
    
    // dodawanie wielu styli css
    $('div').css({
        width: '600px',
        height: '120px',
        backgroundColor: 'lime'
    });
    
    // dodawanie klasy
    $('h1').addClass('nowa_klasa');
    
    // dodawanie atrybutów
    $('h1').attr('title','Główny tytuł ustawiony za pomocą jQuery');
    
});