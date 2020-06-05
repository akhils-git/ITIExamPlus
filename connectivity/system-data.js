const connection = require("../shared_dir/mysql-connection");

function getSystemLogData(req, writeGetDataResponse, res) {
  connection.query("CALL GetSystemLog()", (error, rows, fields) => {
    if (!!error) {
      res.status(400).send(error);
      return;
    } else {
      writeGetDataResponse(res, rows[0]);
    }
  });
}

function saveSystemLogData(req) {
  connection.query(
    `CALL SaveSystemLog('${req.headers.host}','${
      req.headers["user-agent"]
    }', '${req.baseUrl + req.url}')`
  );
}

module.exports.getSystemLogData = getSystemLogData;
module.exports.saveSystemLogData = saveSystemLogData;
