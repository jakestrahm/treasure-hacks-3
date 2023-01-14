import express from "express";
import { newLogger } from "./utils.mjs";
const app = express();
const logger = newLogger();
import accountRoutes from "./routes/account.mjs";


app.use("/api/account", accountRoutes);

app.listen(3001, () => {
  logger.info("running on port 3001");
});