import { z } from "zod";


const UserNameValidationSchema = z.object({
  firstName: z
    .string()
    .nonempty()
    .trim()
    .refine((val) => /^[a-zA-Z]+$/.test(val), {
      message: "Number cannot be assigned in the name",
    }),
  middleName: z.string(), 
  lastName: z.string(),   // Optional and can be undefined
});

const LocalGurdianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

const GurdianValidationSchema = z.object({
  fatherName: z.string(),
  lastName: z.string(),
  contactNo: z.string(),
  motherName: z.string(),
});

const StudentValidationSchema = z.object({
  id: z.string().nonempty(),
  name: UserNameValidationSchema,
  email: z.string().nonempty().email(),
  gender: z.enum(["male", "female"]),
  contactNo: z.string().optional(),
  bloodGroup: z.enum(["A+", "A-", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
  parentAddress: z.string(),
  gurdian: GurdianValidationSchema,
  localgurdian: LocalGurdianValidationSchema,
  profileImg: z.string(),
  isActive: z.enum(["active", "inActive"]),
});




export default StudentValidationSchema;
