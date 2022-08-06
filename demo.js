// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });
//
// promise.finally(() => {
//     console.log('Promise ready')
// }).catch(err => console.log(err))
function greeting(name) {
    console.log('Hello ' + name);
}

function processUserInput(callback) {
    const name = 'An';
    callback(name);
}

processUserInput(greeting);
// const p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
// });
// p.catch(error => console.log(error.message))
// p.catch(error => console.log(error.message))
// const p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
// })
//     .catch(error => console.log(error))
//     .catch(error => console.log(error));
Promise.resolve('Success!')
    .then(data => {
        return data.toUpperCase()
    })
    .then(data => {
        console.log(data)
    })