const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 7001;
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());

const webURL =
  "https://rubenfloresportfolio.netlify.app/" ||
  "https://rubenfloresportfolio.netlify.app/#contact";

const myEmail = process.env.EMAIL;
const myPassword = process.env.PASSWORD;

//setting up email we want to send the client's contact information to
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: myEmail,
    pass: myPassword,
  },
});

app.post(webURL, (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: myEmail,
    subject: `Contact form submission from ${email}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Email sent successfully");
  });
});

// port
app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
