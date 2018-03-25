var przycisk = document.getElementById('przycisk');

przycisk.addEventListener('click', function (event) {
    event.preventDefault();
    $.getJSON(
        "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
        function (dane) {
            $('body').append('<p>UserId: ' + dane.userId + '</p>');
            $('body').append('<p>UserName: ' + dane.userName + '</p>');
            $('body').append('<p>UserURL: ' + dane.userURL + '</p>');
        })

});

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
