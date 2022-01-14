const validator = require('express-joi-validation').createValidator({});

const post_handler = require('../handlers/post.handler');
const post_schema = require('../schemas/post.schema');

module.exports = function (app) {
  app.post(
    '/posts',
    validator.body(post_schema.postSchema),
    post_handler.post_create
  );

  app.patch(
    '/posts/:id',
    validator.body(post_schema.postSchema),
    post_handler.post_update
  );

  app.delete('/posts/:id', post_handler.post_delete);

  app.get(
    '/posts/:id',
    validator.response(post_schema.getPostResponseSchema),
    validator.query(post_schema.getPostQuerySchema),
    post_handler.post_detail
  );

  app.get(
    '/posts',
    validator.response(post_schema.getPostsResponseSchema),
    post_handler.post_list
  );
};
