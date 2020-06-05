const router = require("express").Router();

router.get("/exam", (req, res) => {
  res.send("got");
});
router.post("/exam", (req, res) => {
  res.send("saved");
});

router.delete("/exam", (req, res) => {
  res.send("deleted");
});
module.exports = router;
