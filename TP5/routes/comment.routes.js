const validator = require('express-joi-validation').createValidator({});

const comment_handler = require('../handlers/comment.handler');
const comment_schema = require('../schemas/comment.schema');

module.exports = function (app) {
  app.post(
    '/comments',
    validator.body(comment_schema.commentSchema),
    comment_handler.comment_create
  );

  app.patch(
    '/comments/:id',
    validator.body(comment_schema.commentSchema),
    comment_handler.comment_update
  );

  app.delete('/comments/:id', comment_handler.comment_delete);

  app.get(
    '/comments/:id',
    validator.response(comment_schema.getCommentResponseSchema),
    comment_handler.comment_detail
  );

  app.get(
    '/comments',
    validator.response(comment_schema.getCommentsResponseSchema),
    comment_handler.comment_list
  );
};
