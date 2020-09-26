// Log
console.log("%d + %d is equal to %d", 2, 5, 7);

// Error
console.error('error', 404);

// Tables
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['b']);

// Objects
console.dir([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);

// Assert if truthy
console.assert(true, 'truthy value');
console.assert(false, 'whoopsy, this is false');

// Counter
console.count();
console.count();
console.count();

console.count('wow');
console.count('wow');

// Time logs
console.time();
let a = 0;
while (a < 100000) {
    a++;
}
console.timeEnd();

// Clear
console.count();
console.count();
console.count();
console.clear();

// Trace stack
console.trace('What happened when I logged this message');