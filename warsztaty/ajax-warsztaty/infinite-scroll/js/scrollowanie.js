window.onscroll = function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        ajax('GET', 'https://jsonplaceholder.typicode.com/users', doklejDane)
    }
};

function doklejDane(dane) {
    for (var i = 0; i < dane.length; i++) {
        var paragrafId = document.createElement('p');
        var textId = document.createTextNode(dane[i].id);
        paragrafId.appendChild(textId);
        
        var paragrafName = document.createElement('p');
        var textName = document.createTextNode(dane[i].name);
        paragrafName.appendChild(textName);
        
        var paragrafWebsite = document.createElement('p');
        var textWebsite = document.createTextNode(dane[i].website);
        paragrafWebsite.appendChild(textWebsite);
        
        document.body.appendChild(paragrafId);
        document.body.appendChild(paragrafName);
        document.body.appendChild(paragrafWebsite);
    };
    //console.log(dane[0].name);
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
