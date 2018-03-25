ajax('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function (data) {
    console.log(data);
})

function ajax(method, url, callback) {
    // żądanie http
    var httpRequest = new XMLHttpRequest();

    // otwarcie połączenia
    httpRequest.open(method, url);

    // jeśli status połączenia zmienony (sprawdza status)
    httpRequest.onreadystatechange = function () {
        // https://pl.wikipedia.org/wiki/XMLHttpRequest - readyState
        // jeżeli 4: dane zwrócone i gotowe do użycia
        if (httpRequest.readyState == 4) {
            // https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP - status
            // sprawdza kod statusu połączenia HTTP
            if (httpRequest.status == 200) {
                
                // dane zwrócone w stringu
                //debugger;
                var returnData = httpRequest.responseText;
                
                // zmiana danych na format JSONa
                //var returnData = JSON.parse(httpRequest.responseText);

                // wywołanie f-cji zwrotnej (callback), przekazanej do metody z zwenątrz
                callback(returnData);

                // zeruje obiekt, aby nie utrzymywać niepotrzebnego już połączenia z serwerem
                httpRequest = null;
            }
        }
    }
    //debugger;
    
    // wysyłanie danych do serwera
    httpRequest.send();
}
