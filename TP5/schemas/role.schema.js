const Joi = require('joi');

exports.roleDefinition = {
    name: Joi.string().required()
};

exports.roleSchema = Joi.object(this.roleDefinition);

exports.getRoleResponseSchema = Joi.object({
    ...this.roleDefinition,
    id: Joi.string()
        .min(1)
        .max(100)
        .required(),
    createdAt: Joi.date(),
    updatedAt: Joi.date()
}).unknown(true);

exports.getRolesResponseSchema = Joi.array().items(this.getRoleResponseSchema);