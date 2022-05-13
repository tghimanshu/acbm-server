import { Schema, model } from "mongoose";

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

const Student = model("Student", studentSchema);

export default Student;
