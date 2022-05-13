const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "himnesh234@gmail.com",
    pass: "himdarsh2468",
  },
});

module.exports = transporter;
