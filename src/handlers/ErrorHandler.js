import logger from "../config/winston";
import { BadInputError, ConflictError, ForbiddenError, NotFoundError, UnauthourizedError, UnprocessibleEntityError } from "./CustomError";
import { ResponseHandler } from "./ResponseHandler";

export class ErrorHandler {
	static handleError(err, req, res, next) {
		console.log("Error Instance--------------->", err instanceof Error);
		console.log("Error-------------------->", err);
		if (err instanceof NotFoundError) {
			logger.error(err.message);
			return res.status(404).json({ message: err.message });
		}
		if (err instanceof ConflictError) {
			logger.error(err.message);
			return res.status(409).json(JSON.parse(JSON.stringify(err)));
		}
		if (err instanceof UnauthourizedError) {
			logger.error(err.message);
			return res.status(401).json(JSON.parse(JSON.stringify(err)));
		}
		if (err instanceof UnprocessibleEntityError) {
			logger.error(err.message);
			return res.status(422).json(JSON.parse(JSON.stringify(err)));
		}
		if (err instanceof BadInputError) {
			logger.error(err.message);
			return res.status(400).json(JSON.parse(JSON.stringify(err)));
		}
		if (err instanceof ForbiddenError) {
			logger.error(err.message);
			return res.status(403).json(JSON.parse(JSON.stringify(err)));
		}
		if (err.message == "Validation error" && err instanceof ValidationError) {
			logger.error(err.errors[0].message);
			return res.status(400).json(JSON.parse(JSON.stringify(err)));
		}
		if (err instanceof SyntaxError) {
			console.log("Syntax error");
			return ResponseHandler.response("error", 400, "Invalid JSON payload passed.", res, null);
			// return res.status(400).json(JSON.parse(JSON.stringify(err)));
		}
		next(err);
	}
}
