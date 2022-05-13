import express from "express";
import { registerStudent } from "../controllers/student";

const router = express.Router();

router.post("/student/register", registerStudent);

module.exports = router;
