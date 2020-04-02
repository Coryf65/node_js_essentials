// a Q&A

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your favorite programming language?",
];

const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `)
};

ask(); 

// this will continue to listen for data
process.stdin.on('data', data => {
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
    // evoke an exit event
    process.exit();
});