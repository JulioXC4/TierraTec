import * as Joi from 'joi';

export const updateUserSchema = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    cellPhone: Joi.number(),
    email: Joi.string().email().required(),
});
