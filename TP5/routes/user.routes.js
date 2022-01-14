const validator = require('express-joi-validation').createValidator({});

const user_handler = require('../handlers/user.handler');
const user_schema = require('../schemas/user.schema');

module.exports = function (app) {
  app.post(
    '/users',
    validator.body(user_schema.userSchema),
    user_handler.user_create
  );

  app.patch(
    '/users/:id',
    validator.body(user_schema.userSchema),
    user_handler.user_update
  );

  app.delete('/users/:id', user_handler.user_delete);

  app.get(
    '/users/:id',
    validator.response(user_schema.getUserResponseSchema),
    validator.query(user_schema.getUserQuerySchema),
    user_handler.user_detail
  );

  app.get(
    '/users',
    validator.response(user_schema.getUsersResponseSchema),
    user_handler.user_list
  );
};
