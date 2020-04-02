// our own custom module, will return our string 

let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;

// exoports any JS types
module.exports = {

    inc,
    dec,
    getCount
};