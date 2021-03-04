// setTimeout example

setTimeout(function () {
    console.log('5 seconds have passed');
}, 5000);

// setInterval example

setInterval(function () {
    console.log('1 second has passed');
}, 1000);

// setImmediate example

console.log('Before timeout');

setTimeout(function () {
    console.log('Set timeout over');
}, 0);

setImmediate(function () {
    console.log('Run Immediate call');
});

setTimeout(function () {
    console.log('Another timeout over');
}, 0);

console.log('After set immediate');

// interval clearing

const interval = setInterval(() => {
    console.log('tik');
}, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 4000);