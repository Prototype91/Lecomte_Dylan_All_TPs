const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 400;
    res.end('Hello world!');
});

server.listen(3000, () => console.log('Le server tourne sur le port 3000'));