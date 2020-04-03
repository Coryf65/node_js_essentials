// Pulled out functions from questionsv2.js into a custom module !!
//now using event emitters
const readline = require("readline");
// destructuring to pick certain functions to use from this module
const { EventEmitter } = require("events")

// our interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// want to make the callback optional, creates a dummy function
module.exports = (questions, done = f => f) => {
    const answers = [];
    const [firstQuestion] = questions;
    const emitter = new EventEmitter();

    const questionAnswered = answer => {
        emitter.emit("answer", answer);
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            emitter.emit("complete", answers);
            done(answers);
        }
    };

    rl.question(firstQuestion, questionAnswered);

    return emitter;
};