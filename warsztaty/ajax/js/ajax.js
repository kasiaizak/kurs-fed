// wywołujemy naszą funkcję ajax(), zdefiniowaną poniżej, przekazując adres, metodę, i funkcję, która zwrócone dane zaloguje do konsoli :) 
ajax('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function (data) {
    console.log(data);
})

// definicja funkcji ajax
function ajax(method, url, callback) {
    // utworzenie obiektu żądania http
    var httpRequest = new XMLHttpRequest();

    // otwarcie połączenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    httpRequest.open(method, url);

    // jeśli status połączenia został zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    httpRequest.onreadystatechange = function () {
        // jeżeli 4: dane zwrócone i gotowe do użycia - https://pl.wikipedia.org/wiki/XMLHttpRequest
        if (httpRequest.readyState == 4) {
            // sprawdź kod statusu połączenia - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
            if (httpRequest.status == 200) {
                
                //debugger;
                // dane zwrócone w string-u
                var returnData = httpRequest.responseText;
                
                // zmiana formatu dancy do obiektu JavaScript (można odnoić się do właściwości po kropce, np. jsonObj.userName)
                var jsonObj = JSON.parse(httpRequest.responseText);

                // wywołanie funkcji zwrotnej (callback), przekazanej do metody z zwenątrz
                //callback(returnData);
                callback(jsonObj);

                // zeruj obiekt, aby nie utrzymywać niepotrzebnego już połączenia z serwerem
                httpRequest = null;
            }
        }
    }
    //debugger;
    
    // wysłanie danych do serwera
    httpRequest.send();
}
