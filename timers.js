const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

// run using `npm intervals`
// this will run until it hits up against the waitTime


const incTime = () => {
    currentTime += waitInterval
    const p = Math.floor((currentTime / waitTime) * 100);
    // clearing the terminal
    process.stdout.clearLine();
    // moving cursor to line start
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

console.log(`setting a ${waitTime / 1000} second delay`);

// one line arrow function
const timerFinished = () => {
    clearInterval(Interval);
    // clearing the terminal
    process.stdout.clearLine();
    // moving cursor to line start
    process.stdout.cursorTo(0);
    console.log("done");
}

const Interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);