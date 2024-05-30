const { readFile, writeFile } = require('fs'); // module name is "fs", destructuring fs module, asynchronous one

// the logic of this part was to reiterate what happen on 10-fs-sync.js in asycn 
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    // console.log(result)
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }

        const second = result
        writeFile('./content/result-async.txt', `Hello sainyo guyz and ${first}, ${second} `, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(result) // the result will be undefined because we are not expecting anything, just creating the file
        })
    })
})

/* 

if the output shows "buffer", it is because you dont have the utf8 coding. 
add it between the path and the callback 

in asycn approach, we are offloading the task

*/