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

const answers = [];
// this will continue to listen for data, in this callback function
process.stdin.on('data', data => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

// event listener on Exit
process.on('exit', () => {
    const [name, activity, lang] = answers;
    console.log(`
    
    Thank you for your answers.
    
    Go ${activity} ${name} you can write ${lang} code later !
    
    `)
})