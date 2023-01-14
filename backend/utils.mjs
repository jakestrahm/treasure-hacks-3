const winston = require("winston");

const newLogger = () => {
  return winston.createLogger({
    level: "info",
    format: winston.format.json(),
  });
};

module.exports = { newLogger };
