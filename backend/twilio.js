const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Hello from Twilio",
    from: process.env.TWILIO_PHONE_NUMBER,
    to: "+15167256993",
  })
  .then((message) => console.log(message.sid));
