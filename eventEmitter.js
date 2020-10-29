const events = require('events');

const EventEmitter = events.EventEmitter;

const ee = new EventEmitter();

ee.on('error', function () {
    console.log(`Something went wrong`);
});

ee.on('New User', function (data) {
    console.log(`A new user has joined with username ${data.username} and email ${data.email}`);
});
// A new user has joined with username Shad and email something@example.com

ee.emit("New User", { username: "Shad", email: "something@example.com" });

const count = ee.listenerCount("New User");
console.log("count", count);

const listeners = ee.listeners("New User");
console.log("listeners", listeners);

// ee.setMaxListener(n);

const maxListeners = ee.getMaxListeners();
console.log("maxListeners", maxListeners);