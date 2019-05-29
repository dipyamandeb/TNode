const p = new Promise(function (resolve, reject){
    // Kick off some asynchrnous operation
    // access a database or call a web service or timer

    // assume a promise object received value as part of asynchrononus opertaion
    resolve(1);
});

// to consume promise object
p.then(result => console.log('Result', result));