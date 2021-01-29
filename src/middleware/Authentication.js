/* eslint-disable consistent-return */
import jwt from "jsonwebtoken";
import  Apps from "../models/Apps";
import { UnauthourizedError } from "../handlers/CustomError";
import { globalConfig } from "../config/global";


export class Authentication {
	/**
	 * @param {object} req client request Object
	 * @param {object} res server response object
	 * @param {object} next control structure to continue processing
	 * @returns {JSON}
	 */
	static async auth(req, res, next) {
		const token = req.header("x-auth");
		if (!token) {
			return res.status(401).json({
				status: "failed",
				message: "You are not authorized to access this resource!",
			});
		}
		if (token) {
			const decoded = jwt.verify(token, globalConfig.secretKey);
			req.user = decoded;
			const app = await Apps.findOne({ where: { registerer: req.user.registerer } });
			if (app == null) throw new UnauthourizedError(`Unauthourized Request`);
			next();
		}
	}
}
