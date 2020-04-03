// this will read the contents of files in a given directory

const fs = require("fs");

// reading a text file
fs.readFile("./assets/loremipsum.txt", "UTF-8", (err, text) => {
    if (err) {
        console.log("oops an error occured: " + err.message);
        process.exit();
    }
    console.log("file contents read");
    console.log(text);
});

// reading a Binary File, don't need to suplly the encoding
fs.readFile("./assets/funny_mug.jpg", (err, img) => {
    if (err) {
        console.log(`oops an error occured: ${err.message}`);
        process.exit();
    }
    console.log("file contents read");
    console.log(img);
});