function pobierzDane(e) {
    e.preventDefault();
    ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", wstawDaneDoHtmla)
}

function wstawDaneDoHtmla(dane){
    var paragrafId = document.createElement('p');
    var textId = document.createTextNode('userId: ' + dane.userId);
    paragrafId.appendChild(textId);
    
    var paragrafName = document.createElement('p');
    var textName = document.createTextNode('username: ' + dane.userName);
    paragrafName.appendChild(textName);
    
    var paragrafUrl = document.createElement('p');
    var textUrl = document.createTextNode('userURL: ' + dane.userURL);
    paragrafUrl.appendChild(textUrl);
    
    var przerywnik = document.createElement('p');
    var cialoPrzerywnika = document.createTextNode('---------------------------------');
    przerywnik.appendChild(cialoPrzerywnika);
    
    document.body.appendChild(paragrafId);
    document.body.appendChild(paragrafName);
    document.body.appendChild(paragrafUrl);
    document.body.appendChild(przerywnik);
    //console.log(dane.userId);
}

function ajax(method, url, callback) {
    var httpRequest = new XMLHttpRequest();

    httpRequest.open(method, url);

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                var returnData = JSON.parse(httpRequest.responseText);
                //debugger;

                callback(returnData);

                httpRequest = null;
            }
        }
    }
    
    httpRequest.send();
}
