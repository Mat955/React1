var elementsOfList = [{
        id: 1,
        title: 'Counter Strike',
        desc: 'Game ‎first-person shooter',
        photo: 'https://cdn.shopify.com/s/files/1/0630/8509/products/pst0297reddead_large.jpg?v=1533063544'
    },
    {
        id: 2,
        title: 'Red redemption 2',
        desc: 'Western action-adventure game'
    },
    {
        id: 3,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        photo: 'https://www.bookhunter.pl/okladki/352/large/book_352_large_1.jpg'
    },
    {
        id: 4,
        title: 'Krol Lew',
        desc: 'Film o krolu sawanny',
    }
];

var allElements = elementsOfList.map(function (elementsOfList) {
    return React.createElement('li', {
            key: elementsOfList.id
        },
        React.createElement('h2', {}, elementsOfList.title),
        React.createElement('p', {}, elementsOfList.desc),
        React.createElement('img', {
            src: elementsOfList.photo
        })
    );
});

var elementsOfList =
    React.createElement('div', {},
        React.createElement('h1', {}, 'List of The Best Games & Films'),
        React.createElement('ul', {}, allElements)
    );

ReactDOM.render(elementsOfList, document.getElementById('app-all'));