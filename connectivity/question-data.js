const connection = require("../shared_dir/mysql-connection");

function getQuestionsData(res, writeGetDataResponse) {
  connection.query("CALL GetAllQuestions()", (error, rows, fields) => {
    if (!!error) {
      res.status(400).send(error);
      return;
    } else {
      writeGetDataResponse(res, rows[0]);
    }
  });
}
function saveQuestionData(res, writeSaveResponse, req) {
  connection.query(
    `CALL SaveQuestions(${req.body.id},'${req.body.question}', '${req.body.optionA}', '${req.body.optionB}', '${req.body.optionC}', '${req.body.optionD}', '${req.body.answer}')`,
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

function deleteQuestionData(res, writeDeleteResponse, req) {
  connection.query(
    `call DeleteQuestion(${req.params.Id});`,
    (error, rows, fields) => {
      if (!!error) {
        res.status(400).send(error);
        return;
      } else {
        writeDeleteResponse(res, rows);
      }
    }
  );
}

function countQuestionData(res, writeDeleteResponse, req) {
  connection.query(`call GetQuestionCount();`, (error, rows, fields) => {
    if (!!error) {
      res.status(400).send(error);
      return;
    } else {
      writeDeleteResponse(res, rows[0]);
    }
  });
}
module.exports.getQuestionsData = getQuestionsData;
module.exports.saveQuestionData = saveQuestionData;
module.exports.deleteQuestionData = deleteQuestionData;
module.exports.countQuestionData = countQuestionData;
