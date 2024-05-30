//console.log(__filename);
//console.log(__dirname);
// ------------------------------------
// Event lecture
const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

// Event exercise
/*function log(message, arg) {
    // Send http request
    console.log(message, arg);
}*/

/*function log(message) {
    // Send http request
    console.log(message);
}*/

// --------------------------------------------------------
// Extending EventEmitter

/* By inserting "extends EventEmitter" on Logger class, it will have all the functionality of the 
Event Emitter */
class Logger extends EventEmitter {
    log(message) { // from called "function" to "method"
        // Send http request
        console.log(message);

        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}



//module.exports.log = log;
//module.exports = log;
// Instead of exporting the "log" function, export "Logger" class
module.exports = Logger;
//module.export.endPoint = url;