import express from "express";

class Server {
  constructor(authRouter, accountRouter, itemRouter, categoryRouter) {
    //route config
    this.app = express()
    this.app.use("/api/auth", authRouter);
    this.app.use("/api/account", accountRouter);
    this.app.use("/api/item", itemRouter);
    this.app.use("/api/category", categoryRouter);
  }

  run(port) {
    this.app.listen(port);
  }
}

export default Server;