const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolve data');
        // resolve('This is my other resolve data');
        reject("Sorry!Something went wrong")
    }, 1500);
});
console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('Error: ', error);
});

console.log('after');