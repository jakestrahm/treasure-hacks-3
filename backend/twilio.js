const accountSid = "ACcd21c5cced8333dbaa7fc8a020c115e8";
const authToken = "8bd8464e7f53918293e5a5224f1d8fad";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Hello from Twilio",
    from: "+13204411243",
    to: "+15167256993",
  })
  .then((message) => console.log(message.sid));
