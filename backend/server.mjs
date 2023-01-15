import express from "express";
import { newLogger } from "./utils.mjs";

class Server {
  constructor(authRouter, accountRouter, itemRouter, categoryRouter) {
    //route config
    this.app = express()
    this.app.use("/api/auth", authRouter);
    this.app.use("/api/account", accountRouter);
    this.app.use("/api/item", itemRouter);
    this.app.use("/api/category", categoryRouter);

    //logger
    this.LOGGER = newLogger();
  }


  run(port) {
    this.app.listen(port, () => {
      this.LOGGER.info(`server running on running on port ${port}`); 
    });
  }
}

export default Server;