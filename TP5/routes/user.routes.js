const express = require('express');
const router = express.Router();

const validator = require('express-joi-validation').createValidator({});
const user_handler = require('../handlers/user.handler');
const user_schema = require('../schemas/user.schema');
const user_middleware = require('../middlewares/user.middleware');

router.use(user_middleware.showUserHeaderMiddleware);

router.post(
    '/',
    validator.body(user_schema.userSchema),
    user_handler.user_create
);

router.patch(
    '/:id',
    validator.body(user_schema.userSchema),
    user_handler.user_update
);

router.delete('/:id', user_handler.user_delete);

router.get(
    '/:id',
    validator.response(user_schema.getUserResponseSchema),
    validator.query(user_schema.getUserQuerySchema),
    user_handler.user_detail
);

router.get(
    '/',
    validator.response(user_schema.getUsersResponseSchema),
    user_handler.user_list
);

module.exports = router;