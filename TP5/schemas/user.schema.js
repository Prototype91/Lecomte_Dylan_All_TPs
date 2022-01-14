const Joi = require('joi');

exports.userDefinition = {
    lastname: Joi.string()
        .min(1)
        .max(100)
        .required(),
    firstname: Joi.string()
        .min(1)
        .max(100)
        .required(),
    email: Joi.string()
        .min(1)
        .max(100)
        .required(),
    username: Joi.string()
        .min(1)
        .max(100)
        .required(),
    link: Joi.string()
        .min(1)
        .max(100)
        .required(),
};

exports.postDefinition = Joi.object({
    id: Joi.string().required(),
    title: Joi.string().required(),
    content: Joi.string().required(),
    date: Joi.date().required(),
    userId: Joi.string().required(),
    createdAt: Joi.required(),
    updatedAt: Joi.required()
}).unknown(true);

exports.userSchema = Joi.object(this.userDefinition);

exports.getUserResponseSchema = Joi.object({
    ...this.userDefinition,
    id: Joi.string()
        .min(1)
        .max(100)
        .required(),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
    post: Joi.array().items(this.postDefinition)
}).unknown(true);

exports.getUsersResponseSchema = Joi.array().items(this.getUserResponseSchema);

exports.getUserQuerySchema = Joi.object({
    showPosts: Joi.boolean()
});