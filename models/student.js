import { Schema, model } from "mongoose";

/**
 * Mongoose schema definition for the Student model.
 * Defines the structure of the student document in the MongoDB database.
 *
 * @typedef {Object} StudentSchema
 * @property {string} name - The name of the student. Required.
 * @property {string} email - The email address of the student. Required and unique.
 * @property {number} contact - The contact number of the student. Required.
 * @property {string} [college] - The college the student attends. Optional.
 * @property {string} [course] - The course the student is enrolled in. Optional.
 * @property {string} password - The hashed password of the student. Required.
 * @property {Date} createdAt - Timestamp when the document was created (automatically managed).
 * @property {Date} updatedAt - Timestamp when the document was last updated (automatically managed).
 */
const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    college: String,
    course: String,
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

/**
 * Mongoose model for the Student collection.
 * Provides an interface for interacting with student documents in the database.
 *
 * @type {import('mongoose').Model}
 */
const Student = model("Student", studentSchema);

export default Student;
