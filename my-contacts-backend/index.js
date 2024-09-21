let http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello from my-contact-backend project first testing file');
}).listen(8080)