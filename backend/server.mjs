import express from "express";
import cors from "cors";

class Server {
  constructor(authRouter, accountRouter, itemRouter, categoryRouter) {
    //route config
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());

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