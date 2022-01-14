const express = require('express');
const router = express.Router();

const validator = require('express-joi-validation').createValidator({});
const role_handler = require('../handlers/role.handler');
const role_schema = require('../schemas/role.schema');

router.post(
    '/',
    validator.body(role_schema.roleSchema),
    role_handler.role_create
);

router.patch(
    '/:id',
    validator.body(role_schema.roleSchema),
    role_handler.role_update
);

router.delete('/:id', role_handler.role_delete);

router.get(
    '/:id',
    validator.response(role_schema.getRoleResponseSchema),
    role_handler.role_detail
);

router.get(
    '/',
    validator.response(role_schema.getRolesResponseSchema),
    role_handler.role_list
);

module.exports = router;