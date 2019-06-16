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

myFunction = (theBestGames, movies) => {
    if (theBestGames) {
        return React.createElement('li', {
            key: theBestGames.id
        },
            React.createElement('h2', {}, theBestGames.title),
            React.createElement('p', {}, theBestGames.desc),
            React.createElement('img', {
                src: theBestGames.photo
            }),
        );
    } if (movies) {
        return React.createElement('li', {
            key: movies.id
        },
            React.createElement('h2', {}, movies.title),
            React.createElement('p', {}, movies.desc),
            React.createElement('img', {
                src: movies.photo
            }),
        );
    }
}

var moviesElements = movies.map(myFunction);
var allGamesElements = theBestGames.map(myFunction);

var elementFilms =
    React.createElement('div', {},
        React.createElement('h1', {}, 'List of Films'),
        React.createElement('ul', {}, moviesElements)
    );

var elementGames =
    React.createElement('div', {},
        React.createElement('h1', {}, 'List of The Best Games'),
        React.createElement('ul', {}, allGamesElements)
    );

ReactDOM.render(elementGames, document.getElementById('app-games'));
ReactDOM.render(elementFilms, document.getElementById('app-films')); 