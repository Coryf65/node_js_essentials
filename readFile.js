// this will read the contents of files in a given directory

const fs = require("fs");

const text = fs.readFile("./assets/loremipsum.txt", "UTF-8", (err, text) => {
    console.log("file contents read");
    console.log(text);
});
