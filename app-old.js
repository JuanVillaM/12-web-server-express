const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'aplication/json' });
    let output = {
        name: 'Juan',
        age: 16,
        url: request.url
    };
    response.write(JSON.stringify(output));
    // response.write('Hello World');
    response.end();
}).listen(8080);

console.log('Listen to port 8080');