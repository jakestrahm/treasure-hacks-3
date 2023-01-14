const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const transporter = nodemailer.createTransport({
  service: process.env.NODEMAILER_SERVICE,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

const options = {
  from: "node-123-321@outlook.com",
  to: "kyoshisew@gmail.com",
  subject: "sending email with node.js",
  text: "wow that is nice",
};

transporter.sendMail(options, function (err, info) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Sent : " + info.response);
});
