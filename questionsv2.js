// recreating this file using our new custom lib module
const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What is your name? ",
    "What is your favorite ice cream? ",
    "What will you build with Node js? "
];

// collect the answers from the user
const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => 
    console.log(`question answered: ${answer}`)
);

answerEvents.on("complete", answers => {
    console.log("Thank You for your Answers. ");
    console.log(answers);
});

answerEvents.on("complete", () => process.exit());