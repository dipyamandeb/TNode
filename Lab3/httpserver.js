//loading the http so as to setup the webserver-listening over http
const http = require('http');

// create a web server 
// The web server is an event emitter 
// const server = http.createServer();

// create a web server // The web server is an event emitter  
const server = http.createServer(function (req, res) {
    //design url
    if (req.url === '/') { //base path :  http:localhost:3400
        res.write('Welcome to HTTP');
        res.end();
    }

    if (req.url === '/employee') {
        console.log("Fetching from DB")
        res.write('Fetched the data');
        res.end();
    }
});

//register the server to handle the request/response
server.on('connection', function (socket) {
    console.log("new connection...");
});



// when server is emitting an event, we will provide a handler to handle it
// listen on port  
server.listen(3400);

console.log("Listening on port 3400");


