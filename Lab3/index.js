

const fs = require('fs');

console.log('Start');
// Synchronous code
// console.log("Sync: " + fs.readdirSync('./'));

// asynchronous code
fs.readdir('$', (err, files) => {

    if (err)
        console.log(err);
    else
        console.log("Async: " + files);
});
console.log('Completed');