//load other modules
console.log('index loaded');

const shelf = require('./bookshelf');
const mymodule = require('./mymodule');


shelf.add('C++', 'Pressman');

module.exports.m1 = "Message is :" + mymodule.message1;
module.exports.m2 = "Message is :" + mymodule.message2;