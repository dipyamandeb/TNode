const p = new Promise(function (resolve, reject){
    // Kick off some asynchrnous operation
    // access a database or call a web service or timer

    // assume a promise object received value as part of asynchrononus opertaion
    // resolve(1);
    // reject("Error from promise ");
    reject(new Error("New error Object"));
});

// to consume promise object
p.then(result => console.log('Result', result))
.catch(error=>console.log(error))
;