import dotenv from "dotenv";

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
    const environ = ""; 

    if(environ === "dev") {
        dotenv.config();
    }

    const config = getConfig(); 
}


main();