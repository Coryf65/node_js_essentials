const cp = require("child_process");

// you can open a web browser to a certain website
cp.exec("open https//www.linkedin.com.learning");

// I can onpe another terminal
cp.exec("open -a Terminal .");

// I am running another node file process readStream
cp.exec("node readStream", (err, data, stderr) => {
  console.log(data);
});
