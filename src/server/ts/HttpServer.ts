///<reference path='node.d.ts'/>
import http = require("http");

var SERVER_PORT = 1336;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(SERVER_PORT, '127.0.0.1');

console.log('Server running at http://127.0.0.1:' + SERVER_PORT + '/');