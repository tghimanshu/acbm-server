import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import fs from "fs";
import transporter from "./utils/mail";
require("dotenv").config();

/**
 * Express application instance.
 * @type {import('express').Express}
 */
const app = express();

/**
 * Connect to MongoDB database.
 * The connection string is retrieved from the `DATABASE_URI` environment variable.
 */
mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log("Connected to Mongo DB"))
  .catch((error) => console.log("Error Occured: ", error.message));

/* Middleware */
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use(morgan("dev")); // HTTP request logger

/**
 * Dynamically load and apply routes from the `./routes` directory.
 * All routes are prefixed with `/api`.
 */
fs.readdirSync("./routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);

/**
 * Route to handle contact form submissions.
 * Sends an email using the configured transporter.
 *
 * @name POST /contact
 * @function
 * @param {import('express').Request} req - Express request object.
 * @param {Object} req.body - Request body.
 * @param {string} req.body.subject - Email subject.
 * @param {string} req.body.name - Sender's name.
 * @param {string} req.body.email - Sender's email.
 * @param {string} req.body.message - Email message content.
 * @param {import('express').Response} res - Express response object.
 */
app.post("/contact", (req, res) => {
  const mailOptions = {
    from: "ACBM <himnesh234@gmail.com>",
    to: "himanshugohil234@gmail.com",
    subject: req.body.subject,
    text: `contact request: 
    Name: ${req.body.name} 
    Email: ${req.body.email} 
    Message: ${req.body.message} 
    `,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).json({
        success: false,
      });
    } else {
      res.json({
        success: true,
      });
    }
  });
});

/**
 * Root route to verify server status.
 *
 * @name GET /
 * @function
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
app.get("/", (req, res) => {
  res.send({ success: true });
});

const port = process.env.PORT || 8000;

/**
 * Start the Express server.
 */
app.listen(port, () => console.log(`Server started on port ${port}`));
