import Joi from "joi";

export class ValidationSchema {

    static validationRuleSchema = Joi.object({
        rule: Joi.object({
            "field": Joi.string().min(1).max(255).required().messages({
                'string.base': `field should be a string.`,
                'string.empty': `field cannot be an empty field.`,
                'string.min': `field should have a minimum length of 255.`,
                'any.required': `field is required.`
              }),
            "condition": Joi.string().valid("eq", "neq", "gt", "gte", "contains")
            .required()
            .messages({
                'string.pattern.base': `condition should be a string.`,
                'string.empty': `condition cannot be an empty field.`,
                'string.min': `condition should have a minimum length of 255.`,
                'any.required': `condition is required.`
              }),
            "condition_value": Joi.alternatives(Joi.string().min(1).max(255).required(), Joi.number().required()).required()
            .messages({
                'alternatives.types': 'condition_value should be a string or a number.',
                // 'string.empty': `rule cannot be an empty field.`,
            })
        }).max(100).required().messages({
            'object.base': 'rule should be an object.',
            'object.empty': `Invalid JSON payload.`,
            'any.required': `field is required.`
        }),
        data: Joi.alternatives(Joi.object().max(100).required(), Joi.string().min(1).max(255).required(), Joi.array().min(1).max(100).required()).error(new Error("data should be either an object, a string or an array.")).required(),
    })
}
