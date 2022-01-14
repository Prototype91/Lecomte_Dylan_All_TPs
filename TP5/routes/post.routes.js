const express = require('express');
const router = express.Router();

const validator = require('express-joi-validation').createValidator({});
const post_handler = require('../handlers/post.handler');
const post_schema = require('../schemas/post.schema');
const post_middleware = require('../middlewares/post.middleware');

router.use(post_middleware.showPostHeaderMiddleware);

router.post(
    '/',
    validator.body(post_schema.postSchema),
    post_handler.post_create
);

router.patch(
    '/:id',
    validator.body(post_schema.postSchema),
    post_handler.post_update
);

router.delete('/:id', post_handler.post_delete);

router.get(
    '/:id',
    validator.response(post_schema.getPostResponseSchema),
    validator.query(post_schema.getPostQuerySchema),
    post_handler.post_detail
);

router.get(
    '/',
    validator.response(post_schema.getPostsResponseSchema),
    post_handler.post_list
);

module.exports = router;