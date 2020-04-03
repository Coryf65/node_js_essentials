// Reading and writing contents from the Assets Directory

const fs = require("fs");

// reading the contents, this runs sync
const files = fs.readdirSync("./assets");

console.log("contents of assests/ " + files)