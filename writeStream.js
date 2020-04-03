const fs = require("fs");

// writes out to a file, using a filestream
const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
// using a readstream
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

readStream.pipe(writeStream);
