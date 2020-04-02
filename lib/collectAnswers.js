// Pulled out functions from questionsv2.js into a custom module !!

const readline = require("readline");

// our interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// want to make the callback optional, creates a dummy function
module.exports = (questions, done = f => f) => {
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