console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


console.log(_.isString(true));
console.log(_.isString('Pawel'));

let filteredArray = _.uniq(['Pawel', 1 , 'Pawel', 1, 2, 3, 4])
console.log(filteredArray);


let res = notes.add(9, -2);
console.log('Result: ' + res);
let user = os.userInfo();

fs.appendFileSync('greenings.txt', `Hello ${user.username}! You are ${notes.age}.`);
