const myLibrary = require('./my-library');
const uuid = require('uuid');
const newUuid = uuid();

myLibrary.myFirstMethod();
console.log(`your new Universally unique identifier is ${newUuid}`);
