import { Schema, model } from "mongoose";
import validator from "validator";
import bcript from "bcrypt";

import {
  TGurdian,
  TLocalGurdian,
  TStudent,
  TUserName,
} from "./student/student.interface";

import dotenv from "dotenv";
dotenv.config();

const UserNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: "Number can not assinibale in name",
    },
  },
  middleName: { type: String },
  lastName: { type: String },
});

const LocalGurdianSchema = new Schema<TLocalGurdian>({
  name: { type: String },
  occupation: { type: String },
  contactNo: { type: String },
  address: { type: String },
});

const gurdianSchema = new Schema<TGurdian>({
  fatherName: { type: String },
  lastName: { type: String },
  contactNo: { type: String },
  motherName: { type: String },
});

const studentSchema = new Schema<TStudent>({
  id: { type: String, required: true, unique: true },
  password: { type: String, required: true, maxlength: 20 },
  name: UserNameSchema,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  contactNo: { type: String },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B-", "AB+", "AB-", "O+", "O-"],
  },
  parentAddress: { type: String },
  gurdian: gurdianSchema,
  localgurdian: LocalGurdianSchema,
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ["active", "inActive"],
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
});

studentSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcript.hash(
    user.password,
    Number(process.env.BCRIPT_SALT_ROUND)
  );
  next();
});
studentSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

studentSchema.pre("find", function () {
  this.find({ isDelete: { $ne: true } });
});
studentSchema.pre("findOne", function () {
  this.find({ isDelete: { $ne: true } });
});

export const StudentModel = model<TStudent>("Student", studentSchema);
