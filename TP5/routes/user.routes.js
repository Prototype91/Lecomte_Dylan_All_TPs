const user_handler = require('../handlers/user.handler');

module.exports = function (app) {
    app.post('/users', user_handler.user_create);

    app.patch('/users/:id', user_handler.user_update);

    app.delete('/users/:id', user_handler.user_delete);

    app.get('/users/:id', user_handler.user_detail);

    app.get('/users', user_handler.user_list);
};
