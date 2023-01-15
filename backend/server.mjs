import express, { Router } from "express";
import { newLogger } from "./utils.mjs";
const app = express();
const logger = newLogger();

app.listen(3001, () => {
  logger.info("running on port 3001");
});