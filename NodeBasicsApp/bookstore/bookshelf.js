console.log('bookshelf loaded');
const fs = require('fs');

module.exports.add = function (title, author) {
    //add a new book in database
    fs.writeFileSync('bookshelf.txt', 'Writing the file ');
    console.log('Book added to shelf');
}

module.exports.remove = (title) => {
    //remove in database
    console.log('Book removed from shelf');
}

module.exports.list = () => {
    //remove in database
    console.log('Book List Displayed from the shelf');
}

module.exports.search = (title) => {
    //remove in database
    console.log('Details of BOOK:' + title);
}
