import { globalConfig } from "../config/global";
import logger from "../config/winston";
import { ResponseHandler } from "../handlers/ResponseHandler";
import { PubSub } from "@google-cloud/pubsub";
import path from "path";
import "@babel/polyfill";

export class PubSubService {
	static async sendMessageToQueue(message, queueTopic, attributes = {}) {
		const projectId = globalConfig.projectId;
		const keyFilename = path.resolve(__dirname, "../../cashtoken-auth.json");
		const pubsub = new PubSub({ projectId, keyFilename });
		const topic = pubsub.topic(queueTopic);
		let messageId;
		try {
			const data = Buffer.from(JSON.stringify(message));
			messageId = await topic.publish(data, attributes);
			logger.log({ level: "info", message: `Message ${messageId} sent.` });
		} catch (error) {
			logger.log({ level: "error", message: error.message, lineNumber: error.lineNumber });
			// return ResponseHandler.response("failed", 400, error.message, res);
		}
		return messageId;
	}

	static async receiveMessage(req, res) {
		logger.log({ level: "info", message: `Verifying message token` });
		if (req.query.token !== globalConfig.pubSubVerificationToken) {
			logger.error("Token unable to be verified!", () => {
				console.log("Token unable to be verified!");
			});
			res.status(400).send();
			return;
		}
		console.log("==============================================================================================================");
		const msg = Buffer.from(req.body.message.data, "base64").toString("utf-8");
		return JSON.parse(msg);
	}
}
