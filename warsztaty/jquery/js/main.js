// document.ready gwarantuje, że skrypty wywołają się w momencie gdy cały model DOM jest już załadowany (poniżej skrócony zapis document.ready)
$(function () {
    /*$('.title').css({
        color: 'red',
        backgroundColor: 'yellow',
    })*/
    /*$('h2').css({
        color: 'red',
        backgroundColor: 'yellow',
    })*/
    $('[class = "title"]').css({
        color: 'red',
        backgroundColor: 'yellow',
    })
});
