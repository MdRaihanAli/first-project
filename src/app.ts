import express, { Application, Request, Response } from "express";
import cors from "cors";
import { studentRouter } from "./app/modules/student/student.route";
const app: Application = express();
// const port = 3000

app.use(express.json());
app.use(cors());

app.use("/api/v1/students", studentRouter);

const getAContoler = (req: Request, res: Response) => {
  res.send("Hello World!");
};

app.get("/", getAContoler);

export default app;
