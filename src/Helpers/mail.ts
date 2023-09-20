import nodemailer from "nodemailer";
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMPT_USER,
    pass: process.env.SMPT_PASSWORD,
  },
});

const sendMail = (mail: any) => {
  console.log(mail);
  let details;
  var mailOptions = {
    from: process.env.SMPT_USER,
    to: mail.email,
    subject: "Sending Email.",
    text: mail.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
    } else {
      console.log(info);
    }
  });
};

export default sendMail;
