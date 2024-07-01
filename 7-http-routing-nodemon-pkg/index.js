const http = require('http');
const port = 3030;
const hostName = '127.0.0.1';
const fs = require('fs');

const server = http.createServer((req,res) => {

    console.log(req.url);
    // res.end("Welcome to the server");

    const handleReadFile = (statusCode, fileLocation) => {

        fs.readFile(fileLocation, (err, data) => {

            res.writeHead(statusCode, {"Content-type": "text/html"});
            res.write(data);
            res.end();
        });
        
    };

    if(req.url === '/') {
        handleReadFile(200, "./pages/index.html");
    }

    else if(req.url === '/about') {
        handleReadFile(200, "./pages/about.html");
    }

    else if(req.url === '/contacts') {
        handleReadFile(200, "./pages/contacts.html");
    }

    else {
        handleReadFile(404, "./pages/error.html");
    }
});

server.listen(port, hostName, () => {
    console.log(`Server is running at http://${hostName}:${port}`);
});