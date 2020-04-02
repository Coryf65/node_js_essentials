// using our custom module here

// when loading other file NOT from core or npm
// we need to supply the path
const counter = require("./myModule");

counter.inc();
counter.inc();
counter.inc();


console.log(counter.getCount());