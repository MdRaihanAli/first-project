import { Request, Response } from "express";
import { studentService } from "./studen.service";
// import StudentValidationSchema from "./student.validation";

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    // const zodParseData = StudentValidationSchema.parse(student);
    const result = await studentService.createStudentIntoDB(student);

    res.status(200).json({
      success: true,
      message: "Student is create successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: "Student is get successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudentById = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.getStudentById;
    const result = await studentService.getStudentByIdFromDb(studentId);
    res.status(200).json({
      success: true,
      message: "Student is get by id successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteStudentById = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.getStudentById;
    const result = await studentService.deleteStudentByIdFromDb(studentId);
    res.status(200).json({
      success: true,
      message: "Student delete successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentContoller = {
  createStudent,
  getAllStudent,
  getStudentById,
  deleteStudentById
};
