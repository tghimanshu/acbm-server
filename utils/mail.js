const nodemailer = require("nodemailer");

/**
 * Nodemailer transporter object configured for Gmail service.
 * Used for sending emails from the application.
 *
 * @type {import('nodemailer').Transporter}
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "himnesh234@gmail.com",
    pass: "himdarsh2468",
  },
});

module.exports = transporter;
