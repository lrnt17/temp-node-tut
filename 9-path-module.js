const path = require('path')

console.log(path.sep) // it will return your separator

const filePath = path.join('/content', 'subfolder', 'test.txt') // basically a file inside a folder inside a folder
console.log(filePath);

const base = path.basename(filePath) // it will going to show the last segment of the path
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') // absolute path, like the whole complete path of the this file
console.log(absolute);