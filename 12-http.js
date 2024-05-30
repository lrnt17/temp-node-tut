const http = require('http')

/*

req - incoming request from a client 
res - response is what we sending back

console.log(req) will show it results when you refresh the webpage

*/
const server = http.createServer((req, res)=>{
    //console.log(req)
    if (req.url === '/') {
        res.end('Welcome to our homepage')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>Error 404, page not found</p>
        <a href="/">back to home</a>
    `)
    // res.write('Welcome to our homepage')
    // res.end()
})

server.listen(5000)