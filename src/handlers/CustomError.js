export class ApplicationError extends Error {
	
	constructor(message, status, code) {
		super();
		this.name = this.constructor.name;
		Error.captureStackTrace(this, this.constructor);
		this.message = message || "Something went wrong. Please try again.";
		this.status = status || "failed";
		this.code = code;
	}
}

export class NotFoundError extends ApplicationError {
	constructor(message) {
		super(message, "failed", 404);
	}
}

export class ConflictError extends ApplicationError {
	constructor(message) {
		super(message, "failed", 409);
	}
}

export class UnauthourizedError extends ApplicationError {
	constructor(message) {
		super(message, "failed", 401);
	}
}

export class ForbiddenError extends ApplicationError {
	constructor(message) {
		super(message, "failed", 403);
	}
}

export class InsufficientBalanceError extends ApplicationError {
	constructor(message) {
		super(message, "failed", 400);
	}
}

export class UnprocessibleEntityError extends ApplicationError {
	constructor(message) {
		super(message, "failed", 422);
	}
}

export class BadInputError extends ApplicationError {
	constructor(message) {
		super(message, "failed", 400);
	}
}
