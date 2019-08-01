var movies = [{
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    photo: 'https://ssl-gfx.filmweb.pl/po/57/46/95746/7537945.3.jpg'
},
{
    id: 2,
    title: 'Krol Lew',
    desc: 'Film o krolu sawanny',
    photo: 'https://www.bookhunter.pl/okladki/352/large/book_352_large_1.jpg'
}
];

var theBestGames = [{
    id: 1,
    title: 'Counter Strike',
    desc: 'Game ‎first-person shooter',
    photo: 'https://0.allegroimg.com/s1440/034e59/456e62184b0daa6366dee3e87e60'
},
{
    id: 2,
    title: 'Red redemption 2',
    desc: 'Western action-adventure game',
    photo: 'https://cdn.shopify.com/s/files/1/0630/8509/products/pst0297reddead_large.jpg?v=1533063544'
}
];

var moviesElements = movies.map(createElementFromItem);
var gamesElements = theBestGames.map(createElementFromItem);

var elementFilms = generateElementsContainer('List of The Best Films', moviesElements);
var elementGames = generateElementsContainer('List of The Best Games', gamesElements);

function generateElementsContainer(headerText, elements) {
    return React.createElement('div', {},
        React.createElement('h1', {}, headerText),
        React.createElement('ul', {}, elements)
    );
}

function createElementFromItem(singleItem) {
    return React.createElement('li', {
        key: singleItem.id
    },
        React.createElement('h2', {}, singleItem.title),
        React.createElement('p', {}, singleItem.desc),
        React.createElement('img', {
            src: singleItem.photo
        })
    );
}

ReactDOM.render(elementGames, document.getElementById('app-games'));
ReactDOM.render(elementFilms, document.getElementById('app-films'));