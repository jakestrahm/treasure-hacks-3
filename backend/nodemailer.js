const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "node123@outlook.com",
    pass: "pass",
  },
});

const options = {
  from: "node123@outlook.com",
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
