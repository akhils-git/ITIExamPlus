const express = require("express");

const studentRouter = require("./api/student.js");
const questionRouter = require("./api/question.js");
const examRouter = require("./api/exam.js");
const resultRouter = require("./api/result.js");
const systemRouter = require("./api/system.js");
const logger = require("./shared_dir/logger");

const app = new express();
app.use(logger);
app.use(express.json());
app.use("/api/iti", studentRouter);
app.use("/api/iti", questionRouter);
app.use("/api/iti", examRouter);
app.use("/api/iti", resultRouter);
app.use("/api/iti", systemRouter);

app.listen(3000, () => console.log("Listen 3000 F"));
