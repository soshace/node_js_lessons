// example of callback
setTimeout(() => {
    console.log('timeout');
}, 1000);

// how to create promise
const promise = new Promise(function (resolve, reject) {
    if (success) {
        resolve();
    } else {
        reject();
    }
});

// how to use promise
promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

// how to use async/await
async function () {
    try {
        const result = await promise();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}