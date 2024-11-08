const http = require('http');
const requestListener = require('./server/requestListener.js').requestListener;

const host = 'localhost';
const port = 8000;

http.createServer(requestListener).listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

