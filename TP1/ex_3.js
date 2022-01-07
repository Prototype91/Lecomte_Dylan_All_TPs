const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    const obj = {
        firstname: 'Dylan',
        lastname: 'Lecomte',
        birthdate: '09/06/1999',
        color: 'black'
    };
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(obj));
});

server.listen(3000, () => console.log('Le server tourne sur le port 3000'));