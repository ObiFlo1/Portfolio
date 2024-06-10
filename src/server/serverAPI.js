const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 7001;
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());

// Code below will allow you to send information from the front end to the back end..
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-origin", "*");
  next();
});

const myEmail = process.env.EMAIL;
const myPassword = process.env.PASSWORD;
const myURL = process.env.URL;

//setting up email we want to send the client's contact information to my personal email
function sendEmail({ recipient_email, subject, message }) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: myEmail,
        pass: myPassword,
      },
    });
    // we'll flip these, but have like this for testing purposes
    const mail_configs = {
      from: recipient_email,
      to: myEmail,
      subject: subject,
      text: message,
    };
    transporter.sendEmail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: "An error has occured" });
      }
      return resolve({ message: "email sent successfuly" });
    });
  });
}

////
// app.get("/", (req, res) => {
//   sendEmail()
//     .then((response) => res.send(response.message))
//     .catch((error) => res.status(500).send(error.message));
// });
//

app.post("/", (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.post("/#contact", (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// port
app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});

//////

// const transporter = nodemailer.createTransport({
//     //   service: "gmail",
//   auth: {
//     user: myEmail,
//     pass: myPassword,
//   },
// });

// app.post(webURL, (req, res) => {
//   const { name, email, message } = req.body;

//   const mailOptions = {
//     from: email,
//     to: myEmail,
//     subject: `Contact form submission from ${email}`,
//     text: message,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send("Error sending email");
//     }
//     res.status(200).send("Email sent successfully");
//   });
// });
