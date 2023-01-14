const winston = require("winston");

export const newLogger = () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
  });
};
