const post_handler = require('../handlers/post.handler');

module.exports = function (app) {
    app.post('/posts', post_handler.post_create);

    app.patch('/posts/:id', post_handler.post_update);

    app.delete('/posts/:id', post_handler.post_delete);

    app.get('/posts/:id', post_handler.post_detail);

    app.get('/posts', post_handler.post_list);
};
