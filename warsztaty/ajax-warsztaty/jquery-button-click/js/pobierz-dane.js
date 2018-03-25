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
