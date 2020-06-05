const systemLog = require("../connectivity/system-data");

const logger = (req, res, next) => {
  systemLog.saveSystemLogData(req);
  next();
};
module.exports = logger;
