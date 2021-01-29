
export class ResponseHandler {
	static response(status, code, message, res, data) {
		return res.status(code).json({ message, status, data });
	}
}
