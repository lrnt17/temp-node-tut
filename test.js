
/*function sayHello(name) {
    console.log('Hello ' + name);
}*/

//sayHello('Laurent');
//console.log(window);

/*
console.log(); //global object

setTimeout(); //call a function after a delay
clearTimeout();

setInterval(); //repeatedly calling a function after a give delay
clearInterval(); //stop a function from being called repeatedly
*/

//var message = '';
//console.log(global.message);

//console.log(module);

// const log = require('./logger'); // To load a module, use a require function

//console.log(logger); // wala na i2
//log('Hi Ms.Aileen!');

// ---------------------------------------------------------------------------
// Path module

/*const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);*/

// ---------------------------------------------------------------------------
// OS module

/*const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log('Total Memory' + totalMemory);

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);*/

// ---------------------------------------------------------------------------
// File System Module
// Always prefer to use asynchoronous methods

//const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

/*fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
})*/

// ---------------------------------------------------------------------------
// Event - a signal that something has happened
// When defining a class, always start with capital letter
// Class - container for properties and functions which we call methods

//const EventEmitter = require('events');
// const emitter = new EventEmitter();

// Register a listener
// emitter.on('messageLogged', function(arg){
/*emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});*/

// If you run this with the code below, the event listener "Listner called" will not be called
/*const log = require('./logger');
log('message');*/

// Raised an event
// { ... } - Object
// { id: 1, url: 'http://' } - Event Argument
// emitter.emit('messageLogged', { id: 1, url: 'http://' });

// Event exercise! ----------------------------------------
/*emitter.on('logging', (arg) => {
    log('Hi Staff Domain', arg);
});

emitter.emit('logging', { data:'message' });*/

// ---------------------------------------------------------------------------
// Extending EventEmitter
/*const EventEmitter = require('events');

// If you run this with the code below, the event listener "Listner called" will not be called
const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');*/

// ---------------------------------------------------------------------------
// HTTP Module

const http = require('http');

const server = http.createServer(function(req, res) {
    if (req.url === '/') {
        res.write('Hello Staff Domain!');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000');