// this will read the contents of files in a given directory

const fs = require("fs");

const text = fs.readFileSync("./assets/loremipsum.txt", "UTF-8");

console.log(text);