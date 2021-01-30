import { ResponseHandler } from "../handlers/ResponseHandler";
import _ from "lodash";

export class Validate {


	static checkBody(req, res, next) {
		console.log(req.body);
		if (_.isEmpty(req.body) === true) {
			return ResponseHandler.response("error", 400, "Invalid JSON payload passed.", res, null);
		} else {
			next();
		}
	}

	static checkFieldPattern(req, res, next){
		const patt = /^[A-Za-z_0-9][A-Za-z_0-9]*(\.\b[A-Za-z_0-9][A-Za-z_0-9]*)?$/;
		const bool = patt.test(req.body.rule.field);
		if(bool) {
			next();
		} else {
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
				return ResponseHandler.response("error", 400, result.error.message, res, null);
			}
		};
	}

	static validateQuery(schema) {
		return function (req, res, next) {
			const result = schema.validate(req.query);

			if (result.error == null) {
				next();
			} else {
				return ResponseHandler.response("error", 400, result.error.message, res);
			}
		};
	}

	static validateParams(schema) {
		return function (req,res, next) {
			const result = schema.validate(req.params);
			if (result.error == null) {
				next();
			} else {
				return ResponseHandler.response("error", 400, result.error.message, res);
			}
		};
	}
}
