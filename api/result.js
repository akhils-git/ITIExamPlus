const router = require("express").Router();
const resultValidation = require("../shared_dir/validation");
const resultData = require("../connectivity/result-data");
const responses = require("../api/api-responses/responses");

router.get("/result", (req, res) => {
  resultData.getResultData(res, responses.writeGetDataResponse);
});

router.post("/result", (req, res) => {
  const result = resultValidation.validateResult(req);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  resultData.saveResultData(res, responses.writeSaveResponse, req);
});

// router.delete("/result/:Id", (req, res) => {
//   const result = studentValidation.validateId(req);
//   if (result.error) {
//     res.status(400).send({ Message: result.error.details[0].message });
//     return;
//   }
//   studentData.deleteStudentData(res, responses.writeDeleteResponse, req);
// });

router.get("/countResult", (req, res) => {
  resultData.countResultData(res, responses.writeGetDataResponse);
});
module.exports = router;
