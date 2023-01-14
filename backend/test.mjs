import dotenv from "dotenv";
import twilioClient from "twilio";
import SMSClient from "./notify/sms.mjs";
dotenv.config();


function newTwilioClient() {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const number = process.env.TWILIO_PHONE_NUMBER;
  const client = twilioClient(sid, token);
  return new SMSClient(client, number); 
}

function testTextMessage() {
  const client = newTwilioClient();
  const testNumber = "+1234567890"
  client.sendMessage("hello joshua, some message", testNumber);  
}


testTextMessage(); 