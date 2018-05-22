//import module
var path = require('path');
var name = "Ryan Dulac";

var newName = name.toUpperCase(name);

global.console.log(`newName variable is ${newName}`);

console.log(__dirname);
console.log(path.basename(__filename));
