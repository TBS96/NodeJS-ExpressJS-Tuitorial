const http = require('http');
const port = 6969;
const hostName = '127.0.0.1';

const myServer = http.createServer((req, res) => {
    res.end(`<h1>Hello! I'm yout 1st server, with hostname: ${hostName} & port: ${port}</h1>`)
});

myServer.listen(port, hostName, () => {
    console.log(`Your server is running at http://${hostName}:${port}...`);
});