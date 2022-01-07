const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const users = require('./handlers/users');

const app = express();
app.use(bodyParser.json());

routes(app);
users(app);

app.listen(3000);