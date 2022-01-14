const validator = require('express-joi-validation').createValidator({});

const role_handler = require('../handlers/role.handler');
const role_schema = require('../schemas/role.schema');

module.exports = function (app) {
  app.post(
    '/roles',
    validator.body(role_schema.roleSchema),
    role_handler.role_create
  );

  app.patch(
    '/roles/:id',
    validator.body(role_schema.roleSchema),
    role_handler.role_update
  );

  app.delete('/roles/:id', role_handler.role_delete);

  app.get(
    '/roles/:id',
    validator.response(role_schema.getRoleResponseSchema),
    role_handler.role_detail
  );

  app.get(
    '/roles',
    validator.response(role_schema.getRolesResponseSchema),
    role_handler.role_list
  );
};
