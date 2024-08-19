import express from "express";
import { studentContoller } from "./student.contoler";

const router = express.Router();

router.post("/create-students", studentContoller.createStudent);
router.get("/", studentContoller.getAllStudent);
router.get("/:getStudentById", studentContoller.getStudentById);
router.delete("/:getStudentById", studentContoller.deleteStudentById);

export const studentRouter = router;
