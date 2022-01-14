const Joi = require('joi');

exports.postDefinition = {
    title: Joi.string().required(),
    content: Joi.string().required(),
    date: Joi.date().required(),
    userId: Joi.string().required(),
};

exports.postSchema = Joi.object(this.postDefinition);

exports.commentDefinition = Joi.object({
    id: Joi.string()
        .min(1)
        .max(100)
        .required(),
    content: Joi.string()
        .min(1)
        .max(100)
        .required(),
    date: Joi.date().required(),
    postId: Joi.string()
        .min(1)
        .max(100)
        .required(),
    userId: Joi.string()
        .min(1)
        .max(100)
        .required(),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
}).unknown(true);

exports.getPostResponseSchema = Joi.object({
    ...this.postDefinition,
    id: Joi.string()
        .min(1)
        .max(100)
        .required(),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
    comments: Joi.array().items(this.commentDefinition)
}).unknown(true);

exports.getPostsResponseSchema = Joi.array().items(this.getPostResponseSchema);

exports.getPostQuerySchema = Joi.object({
    showComments: Joi.boolean()
});