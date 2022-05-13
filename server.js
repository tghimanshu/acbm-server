import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import fs from "fs";
import transporter from "./utils/mail";
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log("Connected to Mongo DB"))
  .catch((error) => console.log("Error Occured: ", error.message));

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

fs.readdirSync("./routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);

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

app.get("/", (req, res) => {
  res.send({ success: true });
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server started on port ${port}`));
