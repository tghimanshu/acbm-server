import Student from "../models/student";
import { hashPassword } from "../utils/auth";

/**
 * Registers a new student in the database.
 * Checks if a student with the same email already exists.
 * Hashes the password before saving.
 *
 * @param {import('express').Request} req - The Express request object.
 * @param {Object} req.body - The body of the request containing student details.
 * @param {string} req.body.email - The email of the student.
 * @param {string} req.body.name - The name of the student.
 * @param {string} req.body.password - The password of the student.
 * @param {import('express').Response} res - The Express response object.
 * @returns {Promise<void>} Sends a JSON response with the created student data or an error message.
 */
export const registerStudent = async (req, res) => {
  const user = await Student.findOne({ email: req.body.email }).exec();
  if (user)
    return res.status(403).json({ message: "Student Already Pre Registered" });

  if (req.body.name === "")
    return res.status(403).json({ message: "Name is Required" });

  req.body.password = await hashPassword(req.body.password);

  const student = new Student(req.body);
  const data = await student.save();

  res.json({ ok: true, body: data });
};
