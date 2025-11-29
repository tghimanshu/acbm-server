import express from "express";
import { registerStudent } from "../controllers/student";

const router = express.Router();

/**
 * Route for student registration.
 *
 * @name POST /student/register
 * @function
 * @memberof module:routes/student
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post("/student/register", registerStudent);

module.exports = router;
