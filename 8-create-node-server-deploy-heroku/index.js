const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT;
const hostName = '127.0.0.1';

const handleReadFile = (fileName, statusCode, req, res) => {

    fs.readFile(fileName, "utf-8", (err, data) => {

        if(err) {
            console.log(err);
        }
        else {
            res.writeHead(200, {'Content-type' : 'text/html'});
            res.write(data);
            res.end();
        }

    });
};

const server = http.createServer((req,res) => {
    // res.end("Welcome to server");
    

    if(req.url === '/') {
        handleReadFile('./pages/index.html', 200, req, res);
    }

    else if(req.url === '/about') {
        handleReadFile('./pages/about.html', 200, req, res);
    }

    else if(req.url === '/contact') {
        handleReadFile('./pages/contact.html', 200, req, res);
    }

    else {
        handleReadFile('./pages/404.html', 404, req,res);
    }
});

server.listen(port, () => {
    console.log(`Server is running at http://${hostName}:${PORT}`);
});