const router = require("express").Router();
const questionValidation = require("../shared_dir/validation");
const responses = require("../api/api-responses/responses");
const questionsData = require("../connectivity/question-data");

router.get("/question", (req, res) => {
  questionsData.getQuestionsData(res, responses.writeGetDataResponse);
});
// router.get("/detailstudent/:Id", (req, res) => {
//   const result = studentValidation.validateId(req);
//   if (result.error) {
//     res.status(400).send({ Message: result.error.details[0].message });
//     return;
//   }
//   studentData.detailStudentData(res, responses.writeGetDataResponse, req);
// });
router.post("/question", (req, res) => {
  const result = questionValidation.validateQuestion(req);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  questionsData.saveQuestionData(res, responses.writeSaveResponse, req);
});

router.delete("/question/:Id", (req, res) => {
  const result = questionValidation.validateId(req);
  if (result.error) {
    res.status(400).send({ Message: result.error.details[0].message });
    return;
  }
  questionsData.deleteQuestionData(res, responses.writeDeleteResponse, req);
});

router.get("/countquestion", (req, res) => {
  questionsData.countQuestionData(res, responses.writeGetDataResponse);
});

module.exports = router;
