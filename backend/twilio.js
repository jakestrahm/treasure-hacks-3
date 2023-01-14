const dotenv = require("dotenv");
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;
console.log(accountSid, authToken, phoneNumber);
client.messages
  .create({
    body: "hello with ENV variables!",
    from: phoneNumber,
    to: "+15167256993",
  })
  .then((message) => console.log(message.sid))
  .catch((err) => console.log(err));
