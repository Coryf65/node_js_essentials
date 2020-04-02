const readline = require("readline");

// We are creating our own Module, that inherits readline and using process.stdin and stdout for console input/output

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How do you liek Node? ", answer => {
    console.log(`Your answer: ${answer}`);
});