// We can use process to get more info about the current process


console.log(process.pid);
// 39692

console.log(process.versions.node);
// 8.11.4

// collect info from the terminal, is an array
console.log(process.argv);
//[ 'C:\\Program Files\\nodejs\\node.exe',
//'C:\\Users\\Cory\\Documents\\_Code\\node_js_essentials\\globalProcess' ]

// now we are adding to the argv function
// Run by passing in the args into terminal 
// node globalProcess --greeting Hello --user Cory
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) +1;
    return process.argv[indexAfterFlag];
};

const greeting = grab("--greeting");
const user = grab("--user");


console.log(`${greeting} ${user}`);