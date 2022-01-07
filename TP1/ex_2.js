const http = require('http');

const server = http.createServer((req, res) => {
    const obj = {
        message: 'Hello World',
        status: 200
    };
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(obj));
});

server.listen(3000, () => console.log('Le server tourne sur le port 3000'));