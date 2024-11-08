const http = require('http');
const fsPromises = require('fs').promises;

const host = 'localhost';
const port = 8000;


const requestListener = function (req, res) {
    function fileNotPresent(err) {
        res.writeHead(500);
        res.end(err);
        return;
    }
    switch (req.url) {
        case '/':
            fsPromises.readFile(__dirname + '/index.html').then(contents => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(contents);
            }).catch(fileNotPresent);
            break;
        case '/styles.css':
            fsPromises.readFile(__dirname + '/styles.css').then(contents => {
                res.setHeader('Content-Type', 'text/css');
                res.writeHead(200);
                res.end(contents);
            }).catch(fileNotPresent);
            break;
        case '/script.js':
            fsPromises.readFile(__dirname + '/script.js').then(contents => {
                res.setHeader('Content-Type', 'text/javascript');
                res.writeHead(200);
                res.end(contents);
            }).catch(fileNotPresent);
            break;
        default: 
            res.writeHead(404);
            res.end('Not Found');
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

