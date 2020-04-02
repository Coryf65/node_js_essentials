const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval
    console.log(`waiting ${currentTime / 1000} seconds`)
}

console.log(`setting a ${waitTime / 1000} second delay`);

// one line arrow function
const timerFinished = () => {
    clearInterval(Interval);
    console.log("done");
}

const Interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);