import Student from "../models/student";
import { hashPassword } from "../utils/auth";

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
