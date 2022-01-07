const express = require('express');
const bodyParser = require('body-parser');

const UserRoutes = require('./routes/user.routes');
const RoleRoutes = require('./routes/role.routes');
const PostRoutes = require('./routes/post.routes');
const Commentroutes = require('./routes/comment.routes');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World !');
});

// Starts all the routes
UserRoutes(app);
RoleRoutes(app);
PostRoutes(app);
Commentroutes(app);

// Listen
app.listen(3000);