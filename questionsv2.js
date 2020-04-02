// recreating this file using our new custom lib module
const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What is your name? ",
    "What is your favorite ice cream? ",
    "What will you build with Node js? "
];

// collect the answers from the user
collectAnswers(questions, answers => {
    console.log("Thank You for your Answers. ");
    console.log(answers);
    process.exit();
});