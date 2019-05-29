const EventEmitter = require('events');

// create object of an EventEmitter class to invoke functions 
const emitter = new EventEmitter();

// Register a event
emitter.on('logging', function (payload) {
    console.log('Mesage- ' + payload);

});

emitter.on('greeting', function (payload) {
    // console.log('Welcome to NodeJS:' + JSON.stringify(payload));
    console.log(`Greeting - ${payload.user}`);
});


// Raise an event using event object 
setTimeout(() => {
    emitter.emit('logging', 'warning!, some action');
}, 2000)
//raise and event and pass an object in it
emitter.emit("greeting", { user: 'priyanka' });