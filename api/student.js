const router = require("express").Router();
const studentValidation = require("../shared_dir/validation");
const studentData = require("../connectivity/student-data");
const responses = require("../api/api-responses/responses");

router.get("/student", (req, res) => {
  studentData.getStudentData(res, responses.writeGetDataResponse);
});
router.get("/detailstudent/:Id", (req, res) => {
  const result = studentValidation.validateId(req);
  if (result.error) {
    res.status(400).send({ Message: result.error.details[0].message });
    return;
  }
  studentData.detailStudentData(res, responses.writeGetDataResponse, req);
});
router.post("/student", (req, res) => {
  const result = studentValidation.validateStudent(req);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  studentData.saveStudentData(res, responses.writeSaveResponse, req);
});

router.delete("/student/:Id", (req, res) => {
  const result = studentValidation.validateId(req);
  if (result.error) {
    res.status(400).send({ Message: result.error.details[0].message });
    return;
  }
  studentData.deleteStudentData(res, responses.writeDeleteResponse, req);
});

router.get("/countstudent", (req, res) => {
  studentData.countStudentData(res, responses.writeGetDataResponse);
});

router.post("/login", (req, res) => {
  const result = studentValidation.validateLogin(req);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  studentData.login(res, responses.writeGetDataResponse, req);
});
module.exports = router;
