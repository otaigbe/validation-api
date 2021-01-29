import Sequelize from "sequelize";
import dotenv from "dotenv";
import logger from "./config/winston";
import { globalConfig } from "./config/global";
dotenv.config();

const { db, user, pass, host, env } = globalConfig;
logger.log({ level: "info", message: `Using ${env} configurations` });
export const sequelize = new Sequelize(db, user, pass, {
	host,
	logging: (msg) => logger.info(msg),
	port: globalConfig.dbPort,
	dialect: "mysql",
	pool: {
		max: 25,
		min: 5,
		acquire: 30000,
		idle: 10000,
	},
	// models: [__dirname + "/models"],
});

sequelize
	.authenticate()
	.then(() => {
		logger.log({ level: "info", message: `Using ${globalConfig.env} configurations` });
	})
	.catch((err) => {
		logger.log({ level: "error", message: `Unable to connect to the database: ${err.message}`, lineNumber: err.lineNumber });
	});
