const role_handler = require('../handlers/role.handler');

module.exports = function (app) {
    app.post('/roles', role_handler.role_create);

    app.patch('/roles/:id', role_handler.role_update);

    app.delete('/roles/:id', role_handler.role_delete);

    app.get('/roles/:id', role_handler.role_detail);

    app.get('/roles', role_handler.role_list);
};