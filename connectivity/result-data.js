const connection = require("../shared_dir/mysql-connection");

function getResultData(res, writeGetDataResponse) {
  connection.query("CALL GetResult()", (error, rows, fields) => {
    if (!!error) {
      res.status(400).send(error);
      return;
    } else {
      writeGetDataResponse(res, rows[0]);
    }
  });
}

function saveResultData(res, writeSaveResponse, req) {
  connection.query(
    `CALL SaveResult(${req.body.studentId},'${req.body.mark}', '${req.body.examName}', '${req.body.remarks}', '${req.body.examDate}', '${req.body.totalTime}', '${req.body.skipped}', '${req.body.wrong}', '${req.body.totalQuestions}')`,
    (error, rows, fields) => {
      if (!!error) {
        res.status(400).send(error);
        return;
      } else {
        writeSaveResponse(res, req, rows);
      }
    }
  );
}
function countResultData(res, writeDeleteResponse, req) {
  connection.query(`call GetResultCount();`, (error, rows, fields) => {
    if (!!error) {
      res.status(400).send(error);
      return;
    } else {
      writeDeleteResponse(res, rows[0]);
    }
  });
}
module.exports.getResultData = getResultData;
module.exports.saveResultData = saveResultData;
module.exports.countResultData = countResultData;
