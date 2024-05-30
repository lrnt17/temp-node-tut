const { readFileSync, writeFileSync } = require('fs'); // module name is "fs", destructuring fs module
// it will be the same thing as:
// const fs = require('fs');
// fs.readFileSync;

const first = readFileSync('./content/first.txt', 'utf8') // reading content of txt file
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

// create a new file which does not exist, the flag a simply doubles the content
writeFileSync (
    './content/result-sync.txt', 
    `Hello Staff Domain and ${first}, ${second} `,
    { flag: 'a'} // used for appending, if we add the "flag" we are creating new value
)

/* in sycnchronous approach, we are doing line by line */