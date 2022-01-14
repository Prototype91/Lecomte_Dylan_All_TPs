const express = require('express');
const router = express.Router();

const validator = require('express-joi-validation').createValidator({});
const comment_handler = require('../handlers/comment.handler');
const comment_schema = require('../schemas/comment.schema');
const comment_middleware = require('../middlewares/comment.middleware');

router.use(comment_middleware.showCommentHeaderMiddleware);

router.post(
    '/',
    validator.body(comment_schema.commentSchema),
    comment_handler.comment_create
);

router.patch(
    '/:id',
    validator.body(comment_schema.commentSchema),
    comment_handler.comment_update
);

router.delete('/:id', comment_handler.comment_delete);

router.get(
    '/:id',
    validator.response(comment_schema.getCommentResponseSchema),
    comment_handler.comment_detail
);

router.get(
    '/',
    validator.response(comment_schema.getCommentsResponseSchema),
    comment_handler.comment_list
);

module.exports = router;