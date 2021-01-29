require("express-async-errors");
import express from "express";
import conf from "dotenv";
import logger from "./config/winston";
import endpoints from "./routes/routes";
import { globalConfig } from "./config/global";
import { ErrorHandler } from "./handlers/ErrorHandler";
import morgan from "morgan";
import "@babel/polyfill";

conf.config();
const app = express();
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
const format = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] - :response-time ms :total-time ms ":referrer" ":user-agent"';
app.use(morgan(format));
app.enable("trust proxy");

app.use("/", endpoints);

app.use(ErrorHandler.handleError);
app.use(express.static("public"));
const port = globalConfig.port || 9090;

(async () => {
	app.listen(port, () => {
		logger.log({ level: "info", message: `app running on ${port}...` });
	});
})();
