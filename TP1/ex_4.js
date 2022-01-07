const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    const query = url.parse(req.url, true).query;
    const message = query?.message ?? 'Rien à afficher';
    res.setHeader('Content-Type', 'application/json');
    res.end(`${message}`);
});

server.listen(3000, () => console.log('Le server tourne sur le port 3000'));