import winston from "winston";

const newLogger = () => {
  return winston.createLogger({
    level: "info",
    format: winston.format.json(),
  });
};

export { newLogger };
