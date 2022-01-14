const express = require('express');
const bodyParser = require('body-parser');

const UserRoutes = require('./routes/user.routes');
const RolesRoutes = require('./routes/role.routes');
const PostsRoutes = require('./routes/post.routes');
const CommentsRoutes = require('./routes/comment.routes');

const server_middlewares = require('./middlewares/server.middleware.js');

const app = express();

app.use(bodyParser.json());
app.use(server_middlewares.dateMiddleware);
app.use(server_middlewares.ecvHeaderMiddleware);
app.use(server_middlewares.checkAuthorizationMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World !');
});

// Starts all the routes
app.use('/users', UserRoutes);
app.use('/posts', PostsRoutes);
app.use('/roles', RolesRoutes);
app.use('/comments', CommentsRoutes);

// Listen
app.listen(3000);