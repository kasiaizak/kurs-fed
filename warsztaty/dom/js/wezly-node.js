var parFirst = document.getElementById('parFirst');

// pobieram rodzica dla elementu #parFirst za pomocą właściwości parentElement
//console.log(parFirst.parentElement);

// childNodes pobiera wszystkie węzły w tym także białe znaki między elementami jako "text" oraz komentarze
//console.log(parFirst.childNodes);
//console.log(parFirst.childNodes[0]);

// children pobiera tylko te węzły które są elementem html
//console.log(parFirst.children);

// pobieram pierwsze dziecko elementu #parFirst
var pierwszeDziecko = parFirst.children[0];
// pobieram następny węzeł dla pierwszeDziecko, który jest elementem w relacji rodzeństwo
//console.log(pierwszeDziecko.nextElementSibling);

// pobieram następny węzeł dla pierwszeDziecko niezależnie czy jest elementem html, textem czy komentarzem
//console.log(pierwszeDziecko.nextSibling);

// lastChild pobiera ostatnie dziecko elementu niezależnie czy jest elementem html, textem czy komentarzem
//var ostatnieDziecko = parFirst.lastChild;

// lastChild pobiera ostatnie dziecko, które jest elementem w relacji rodzeństwo
var ostatnieDziecko = parFirst.lastElementChild;
console.log(ostatnieDziecko);