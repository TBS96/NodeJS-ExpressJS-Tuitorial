const http = require('http');
const port = 6968;
const hostName = '127.0.0.1';

const myServer = http.createServer((req, res) => {

    res.writeHead(202, {'Content-type':'text/html'});
    
    res.write(`<h1>Hello! I'm yout 2nd server, with hostname: ${hostName} & port: ${port}</h1>`);
    res.write(`<h1>Hello! I'm yout 2nd server, with hostname: ${hostName} & port: ${port}</h1>`);
    res.write(`<h1>Hello! I'm yout 2nd server, with hostname: ${hostName} & port: ${port}</h1>`);
    res.write(`<h1>Hello! I'm yout 2nd server, with hostname: ${hostName} & port: ${port}</h1>`);
    res.write(`<h1>Hello! I'm yout 2nd server, with hostname: ${hostName} & port: ${port}</h1>`);
    res.write(`<h1>Hello! I'm yout 2nd server, with hostname: ${hostName} & port: ${port}</h1>`);
    res.write(`<h1>Hello! I'm yout 2nd server, with hostname: ${hostName} & port: ${port}</h1>`);
    res.write(`<h1>Hello! I'm yout 2nd server, with hostname: ${hostName} & port: ${port}</h1>`);
    res.end();
});

myServer.listen(port, hostName, () => {
    console.log(`Your server is running at http://${hostName}:${port}...`);
});




// Notes:

// 1. for request, there are some common methods: get(), post(), delete(), put(), head(). => we'll mainly use get() & post()

// 2. In response we will get status code & data (including head & body).


// HTTP status codes:
// 1. Informational response: 100 - 199
// 2. Successful response: 200 - 299
// 3. Redirects response: 300 - 399
// 4. Client errors: 400 - 499
// 5. Server errors: 500 - 599