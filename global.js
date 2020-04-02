// each file we create is called a module, in order to load other modules we need to specify
// with using 'require()'

//loading external modules
const path = require("path");

console.log(`The filename is ${path.basename(__filename)}`);
// The filename is global.js

// playing with some global functions

console.log(__dirname);
// C:\Users\Cory\Documents\_Code\node_js_essentials

console.log(__filename);
// C:\Users\Cory\Documents\_Code\node_js_essentials\global.js