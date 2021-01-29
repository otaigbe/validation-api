import { ResponseHandler } from "../handlers/ResponseHandler";

export class Validate {

	static checkFieldPattern(req, res, next){
				const patt = /^[A-Za-z_0-9][A-Za-z_0-9]*(\.\b[A-Za-z_0-9][A-Za-z_0-9]*)?$/;
				const bool = patt.test(req.body.rule.field);
				if(bool) {
					next();
				} else {
					// res.json({"message" : result.response.errorMessage});
					return ResponseHandler.response("error", 400, "field should have depth of one.", res, null);
				}
			
	}

	static validateSchema(schema) {
		return function (req, res, next) {
			const result = schema.validate(req.body);

			if (result.error == null) {
				next();
			} else {
				// throw new BadInputError("Bad Input");
				// console.log(result.error);
				return ResponseHandler.response("failed", 400, result.error.message, res, null);
			}
		};
	}

	static validateQuery(schema) {
		return function (req, res, next) {
			const result = schema.validate(req.query);

			if (result.error == null) {
				next();
			} else {
				return ResponseHandler.response("failed", 400, result.error.message, res);
			}
		};
	}

	static validateParams(schema) {
		return function (req,res, next) {
			const result = schema.validate(req.params);
			if (result.error == null) {
				next();
			} else {
				return ResponseHandler.response("failed", 400, result.error.message, res);
			}
		};
	}
}
