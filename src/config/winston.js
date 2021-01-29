import winston from "winston";
import { loggers } from "winston";
import { format } from "winston";
import 'winston-daily-rotate-file';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// import { LoggingWinston } from "@google-cloud/logging-winston";

const { combine, timestamp } = format;
// const loggingWinston = new LoggingWinston();
const transport = new winston.transports.Console();
 
 const fileTransport = new (winston.transports.DailyRotateFile)({
    filename: 'application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
	maxFiles: '14d',
	dirname: 'logs'
  });
 
const myFormat = format.printf(({ level, message, timestamp, lineNumber = "N/A" }) => {
	return `${timestamp}: ${level}: ${message}: ${lineNumber}`;
});

const logger = winston.createLogger({
	level: "info",
	format: combine(timestamp(), myFormat),
	transports: [transport, fileTransport],
});
export default logger;
