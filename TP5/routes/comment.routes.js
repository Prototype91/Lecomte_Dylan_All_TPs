const comment_handler = require('../handlers/comment.handler');

module.exports = function (app) {
    app.post('/comments', comment_handler.comment_create);

    app.patch('/comments/:id', comment_handler.comment_update);

    app.delete('/comments/:id', comment_handler.comment_delete);

    app.get('/comments/:id', comment_handler.comment_detail);

    app.get('/comments', comment_handler.comment_list);
};