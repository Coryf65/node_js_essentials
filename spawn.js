// This will run processes async, if a process needs to wait for inputs, or takes time
const cp = require("child_process");

const questionApp = cp.spawn("node", ["questionsv2.js"]);

questionApp.stdin.write("Alex \n");
questionApp.stdin.write("Tahoe \n");
questionApp.stdin.write("Change the world \n");

questionApp.stdout.on("data", data => {
  console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
  console.log(`questionApp process exited`);
});
