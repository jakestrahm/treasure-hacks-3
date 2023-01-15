import dotenv from "dotenv";
import yargs from "yargs"; 
import mongoose from "mongoose"; 

import { authRouter, accountRouter, itemRouter, categoryRouter } from "./routers.mjs"; 
import Server from "./server.mjs";

import AuthController from "./controllers/auth.mjs";
import AccountController from "./controllers/account.mjs";
import ItemController from "./controllers/item.mjs";
import CategoryController from "./controllers/category.mjs";

function getConfig() {
    return {
        app: {
            port: process.env.PORT,
        },
        mongo: {
            url: process.env.MONGODB_URL, 
        },
        twilio: {
            sid: process.env.TWILIO_ACCOUNT_SID,
            token: process.env.TWILIO_AUTH_TOKEN,
            number: process.env.TWILIO_PHONE_NUMBER,
        },
        nodemailer: {
            service: process.env.NODEMAILER_SERVICE,
            username: process.env.NODEMAILER_USER,
            password: process.env.NODEMAILER_PASS,
        }
    }
}


function main() {
    const args = yargs(process.argv).argv;
    const environ = args.environ; 

    if(environ === "dev") {
        dotenv.config();
    }

    const config = getConfig();     

    // connecting to db

    // building server
    const server = new Server(
      authRouter(new AuthController()),
      accountRouter(new AccountController()),
      itemRouter(new ItemController()),
      categoryRouter(new CategoryController())
    );

    server.run(config.app.port);
}


main();