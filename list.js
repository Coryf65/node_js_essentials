// Reading and writing contents from the Assets Directory

const fs = require("fs");

console.log("Started reading the Directory")
// reading the contents, this runs Async
const files = fs.readdir("./assets", (err, files) =>{
    if (err) {
        throw err;
    }    
    console.log("Complete")
    console.log("contents of assests/ " + files)
});
