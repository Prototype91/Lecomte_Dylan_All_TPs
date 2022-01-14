const Joi = require('joi');

exports.commentDefinition = {
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
        .required()
};

exports.commentSchema = Joi.object(this.commentDefinition);

exports.getCommentResponseSchema = Joi.object({
    ...this.commentDefinition,
    id: Joi.string()
        .min(1)
        .max(100)
        .required(),
    createdAt: Joi.date(),
    updatedAt: Joi.date()
}).unknown(true);

exports.getCommentsResponseSchema = Joi.array().items(this.getCommentResponseSchema);