// node modules that we don't need to install using npm, these are the built in ones 

const path = require("path");
const util = require("util");
const v8 = require("v8");

// ----------- using the path Module ----------- //

// getting a path into www/files/uploads
const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
// showing in the console
console.log(dirUploads);

// spacer
console.log('\n\n')

// ----------- using the util Module -----------//

// outputs to console with a date perpended to it
util.log( path.basename(__filename) );
util.log(" ^ The name of the current file");

// spacer
console.log('\n\n')

// ----------- using the v8 Module ----------- //
util.log(v8.getHeapStatistics());
