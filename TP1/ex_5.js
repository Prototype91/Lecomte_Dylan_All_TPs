const http = require('http');

const server = http.createServer((req, res) => {
    let msg;
    if (req.url === '/welcome') {
        res.statusCode = 200;
        msg = 'hello world';
    } else {
        res.statusCode = 404;
        msg = 'not found';
    }
    res.end(msg);
});

server.listen(3000, () => console.log('Le server tourne sur le port 3000'));