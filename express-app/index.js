//express module returns a function express
// express() is a top-level function exported by the express module 

var express = require('express')

//setup webserver as well as invoke the function that returns an object
var app = express()
// var path = require('path');

//middleware - JSON object
app.use(express.json());

const customers = [
    { id: 1, name: 'priyanka' },
    { id: 2, name: 'deb' },
    { id: 3, name: 'john' },
];




//Demo
//http request, GET-> body can't be present by header can be there.
app.get('/', function (req, res) {
    //return string
    // res.send('Hello World')// res.send() =  res.write()+ res.end();

    //return object
    // res.send({id: 1, name:'priyanka'});

    //return file
    res.sendFile(__dirname + '/index.html');

});

//get by id
app.get('/api/customer/:id/:name', (req, res) => {
    res.send("Id :" + req.params.id + " name: " + req.params.name);
});

//Query param
//http://localhost:3000/api/customer/?sortBy=id
app.get('/api/customer/?', (req, res) => {
    res.send('sortBy: ' + req.query.sortBy);
});



//POST
app.post('/api/customer/create', (req, res) => {
    const customer = {
        id: customers.length + 1,
        name: req.body.name,
    }

    customers.push(customer);
    res.send(customer);
});

//List all the customers
app.get('/api/customer/list', (req, res) => {
    res.send(customers);
});


// listen on export app.listen(3000, () =>
app.listen(3000, () =>
    console.log("Connected to server")
)