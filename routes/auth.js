import express from "express";
import { register } from "../controllers/auth";

const router = express.Router();

/**
 * Route for user registration.
 *
 * @name POST /register
 * @function
 * @memberof module:routes/auth
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post("/register", register);

module.exports = router;
