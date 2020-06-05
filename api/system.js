const router = require("express").Router();
const systemData = require("../connectivity/system-data");
const responses = require("../api/api-responses/responses");

// router.get("/monitor", (req, res) => {
//   res.send(req.headers["user-agent"]);
// });

router.get("/monitor", (req, res) => {
  systemData.getSystemLogData(req, responses.writeGetDataResponse, res);
});
module.exports = router;
