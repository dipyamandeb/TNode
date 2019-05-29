//import logger,js
const LoggerClass = require('./logger');

//making instance of logger.js
const testLogger = new LoggerClass();

// Register a listener
testLogger.on('messageLogged', function (arg) {
    console.log('Listener called:  ', arg.url);
});

// const log = require ('./logger'); 
testLogger.log('This is from testLogger'); 