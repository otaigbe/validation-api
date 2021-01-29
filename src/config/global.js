import dotenv from "dotenv";
import logger from "./winston";
import path from "path";

dotenv.config({
	path: path.resolve(__dirname, "../../.env"),
});

let db = process.env.DB_NAME_PROD;
let user = process.env.DB_USER_PROD;
let pass = process.env.DB_PASS_PROD;
let host = process.env.DB_HOST_PROD;
let dbPort = 25060;
let projectId = process.env.PROJECTID;
let pubSubTopic = process.env.PUBSUB_TOPIC_PROD;
let pubSubVerificationToken = process.env.PUBSUB_VERIFICATION_TOKEN;
let infobipKey = process.env.INFOBIP_API_KEY;
let infobipUrl = process.env.INFOBIP_URL;
let port = process.env.PORT;
let notifyUrl = process.env.NOTIFY_URL_PROD;
let workerPort = process.env.WORKER_PORT;
let pubsubSms = process.env.PUBSUB_MESSAGE_TOPIC_PROD;
let pubSubEmail = process.env.PUBSUB_EMAIL_QUEUE;
let mongoURI = process.env.MONGO_PROD;
let secretKey = process.env.SECRETKEY;
let system_id = process.env.SYSTEM_ID_PROD;
let smpp_host = process.env.SYSTEM_HOST_PROD;
let smpp_port = process.env.SMPP_PORT_PROD;
let system_password = process.env.SYSTEM_PASSWORD_PROD;
let env = "production";
let emailHost = "smtp.zoho.com";
let emailPass = "5VdnAVaUVaVd";
let emailUser = "no_reply@cashtoken.ng";
if (process.env.NODE_ENV == "test") {
	db = process.env.DB_NAME_TEST;
	user = process.env.DB_USER_TEST;
	pass = process.env.DB_PASS_TEST;
	host = process.env.DB_HOST_TEST;
	env = process.env.NODE_ENV;
	port = process.env.PORT;
	dbPort = 3306;
	projectId = process.env.PROJECTID;
	pubSubTopic = process.env.PUBSUB_TOPIC_TEST;
	pubSubVerificationToken = process.env.PUBSUB_VERIFICATION_TOKEN;
	infobipKey = process.env.INFOBIP_API_KEY;
	infobipUrl = process.env.INFOBIP_URL;
	pubsubSms = process.env.PUBSUB_MESSAGE_TOPIC_PROD;
	pubSubEmail = process.env.PUBSUB_EMAIL_QUEUE;
	mongoURI = process.env.MONGO_URI;
	secretKey = process.env.SECRETKEY;
	system_id = process.env.SYSTEM_ID_TEST;
	system_password = process.env.SYSTEM_PASSWORD_TEST;
	smpp_host = process.env.SYSTEM_ID_HOST;
	emailHost = "smtp.zoho.com";
	emailPass = "5VdnAVaUVaVd";
	emailUser = "no_reply@cashtoken.ng";
} else if (process.env.NODE_ENV == "development") {
	db = process.env.DB_NAME_STAGE;
	user = process.env.DB_USER_STAGE;
	pass = process.env.DB_PASS_STAGE;
	dbPort = 3306;
	port = process.env.PORT || 8080;
	host = process.env.DB_HOST_STAGE;
	env = process.env.NODE_ENV;
	projectId = process.env.PROJECTID;
	pubSubTopic = process.env.PUBSUB_TOPIC_DEV;
	pubSubVerificationToken = process.env.PUBSUB_VERIFICATION_TOKEN;
	infobipKey = process.env.INFOBIP_API_KEY;
	infobipUrl = process.env.INFOBIP_URL;
	workerPort = process.env.WORKER_PORT || 3000;
	notifyUrl = process.env.NOTIFY_URL_DEV;
	pubsubSms = process.env.PUBSUB_MESSAGE_TOPIC_PROD;
	pubSubEmail = process.env.PUBSUB_EMAIL_QUEUE;
	mongoURI = process.env.MONGO_DEV;
	secretKey = process.env.SECRETKEY;
	system_id = process.env.SYSTEM_ID_DEV;
	system_password = process.env.SYSTEM_PASSWORD_DEV;
	smpp_host = process.env.SYSTEM_HOST_DEV;
	smpp_port = process.env.SMPP_PORT_DEV;
	emailHost = "smtp.zoho.com";
	emailPass = "5VdnAVaUVaVd";
	emailUser = "no_reply@cashtoken.ng";
} else if (process.env.NODE_ENV == "staging") {
	db = process.env.DB_NAME_STAGE;
	user = process.env.DB_USER_STAGE;
	pass = process.env.DB_PASS_STAGE;
	dbPort = 3306;
	port = process.env.PORT;
	host = process.env.DB_HOST_STAGE;
	env = process.env.NODE_ENV;
	projectId = process.env.PROJECTID;
	pubSubTopic = process.env.PUBSUB_TOPIC_STAGE;
	pubSubVerificationToken = process.env.PUBSUB_VERIFICATION_TOKEN;
	// infobipKey = process.env.INFOBIP_API_KEY;
	infobipUrl = process.env.INFOBIP_URL;
	notifyUrl = process.env.NOTIFY_URL_STAGE;
	workerPort = process.env.WORKER_PORT;
	pubsubSms = process.env.PUBSUB_MESSAGE_TOPIC_PROD;
	pubSubEmail = process.env.PUBSUB_EMAIL_QUEUE;
	mongoURI = process.env.MONGO_DEV;
	secretKey = process.env.SECRETKEY;
	system_id = process.env.SYSTEM_ID_STAGE;
	system_password = process.env.SYSTEM_PASSWORD_STAGE;
	smpp_host = process.env.SYSTEM_HOST_STAGE;
	smpp_port = process.env.SMPP_PORT_STAGE;
	emailHost = "smtp.zoho.com";
	emailPass = "5VdnAVaUVaVd";
	emailUser = "no_reply@cashtoken.ng";
}
logger.log({ level: "info", message: `app running on ${env}...` });
export const globalConfig = {
	db,
	user,
	pass,
	host,
	dbPort,
	env,
	projectId,
	pubSubTopic,
	pubSubVerificationToken,
	infobipKey,
	port,
	infobipUrl,
	notifyUrl,
	workerPort,
	pubsubSms,
	pubSubEmail,
	mongoURI,
	secretKey,
	emailHost,
	emailPass,
	emailUser,
	system_id,
	system_password,
	smpp_host,
	smpp_port,
};
