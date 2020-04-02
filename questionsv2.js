// Recreating the Q&A quiz using our new readline module

const readline = require("readline");

// our interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name? ",
    "What is your favorite ice cream? ",
    "What will you build with Node js? "
];

const collectAnswers = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            done(answers);
        }
    };

    rl.question(firstQuestion, questionAnswered);
};

// collect the answers from the user
collectAnswers(questions, answers => {
    console.log("Thank You for your Answers. ");
    console.log(answers);
    process.exit();
});