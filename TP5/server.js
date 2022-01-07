const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./models');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World !');
});

app.post('/users', async (req, res) => {
    const payload = req.body;
    const user = await User.create(payload);
    console.log(user);
    res.send(user);
});

app.listen(3000);