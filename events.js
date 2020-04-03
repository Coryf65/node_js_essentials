// Going to create Custom Events, and handlers! 
// These Events are async
const events = require("events");

// new instance of the event emitter
const emitter = new events.EventEmitter();

// now we need to handle this event
emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

// raise a custom event
emitter.emit("customEvent", "Hello World", "Computer");

