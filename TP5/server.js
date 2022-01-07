const express = require('express');
const bodyParser = require('body-parser');
const users = require('./handlers/users');
const roles = require('./handlers/roles');
const posts = require('./handlers/posts');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World !');
});

users(app);
roles(app);
posts(app);

app.listen(3000);