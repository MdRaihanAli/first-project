import { StudentModel } from "../student.model";
import { TStudent } from "./student.interface";

const createStudentIntoDB = async (student: TStudent) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getStudentByIdFromDb = async (id: string) => {
  const result = StudentModel.findOne({ id });
  return result;
};
const deleteStudentByIdFromDb = async (id: string) => {
  const result = StudentModel.updateOne({ id }, {isDelete: true});
  return result;
};

export const studentService = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getStudentByIdFromDb,
  deleteStudentByIdFromDb
};
