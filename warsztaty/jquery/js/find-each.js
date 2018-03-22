// Metoda find wyszukuje potomków selektora. W poniższym przykładzie poszuka paragrafów znajdujących się w div. Metoda find może wyszukiwać po tagum klasie, id, atrybucie
$('div').find('p').css({
    fontSize: '30px',
    color: 'blue',
});

// Metoda each - jako parametr przyjmuje funkcję zwrotną, która zostanie wykonana na każdym znalezionym elemencie
$('p').each(function (index, element) {
    console.log(index, element);
    $(this).addClass('newa_class').css({
        fontSize: '40px',
        backgroundColor: 'yellow'
    })
});
