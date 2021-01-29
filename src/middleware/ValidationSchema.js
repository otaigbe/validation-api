import Joi from "joi";

export class ValidationSchema {

    static validationRuleSchema = Joi.object({
        rule: Joi.object({
            "field": Joi.string().error(new Error("Field should be a string.")).required(),
            "condition": Joi.string().valid("eq", "neq", "gt", "gte", "contains").required(),
            "condition_value": Joi.alternatives(Joi.string(), Joi.number())
        }).required(),
        data: Joi.alternatives(Joi.object(), Joi.string(), Joi.array()),
    })
}
