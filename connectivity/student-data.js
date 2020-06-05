const connection = require("../shared_dir/mysql-connection");

function getStudentData(res, writeGetDataResponse) {
  connection.query("CALL GetAllUsers()", (error, rows, fields) => {
    if (!!error) {
      res.status(400).send(error);
      return;
    } else {
      writeGetDataResponse(res, rows[0]);
    }
  });
}
function detailStudentData(res, writeGetDataResponse, req) {
  connection.query(
    `CALL DetailUser(${req.params.Id})`,
    (error, rows, fields) => {
      if (!!error) {
        res.status(400).send(error);
        return;
      } else {
        writeGetDataResponse(res, rows[0]);
      }
    }
  );
}
function saveStudentData(res, writeSaveResponse, req) {
  connection.query(
    `CALL SaveUser(${req.body.id},'${req.body.name}', '${req.body.regnumber}', '${req.body.trade}', '${req.body.shift}')`,
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

function deleteStudentData(res, writeDeleteResponse, req) {
  connection.query(
    `call DeleteUser(${req.params.Id});`,
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

function countStudentData(res, writeDeleteResponse, req) {
  connection.query(`call GetUserCount();`, (error, rows, fields) => {
    if (!!error) {
      res.status(400).send(error);
      return;
    } else {
      writeDeleteResponse(res, rows[0]);
    }
  });
}

function login(res, writeGetDataResponse, req) {
  connection.query(
    `CALL Login(${req.body.registerNumber},'${req.body.password}')`,
    (error, rows, fields) => {
      if (!!error) {
        res.status(400).send(error);
        return;
      } else {
        writeGetDataResponse(res, rows[0]);
      }
    }
  );
}
module.exports.getStudentData = getStudentData;
module.exports.saveStudentData = saveStudentData;
module.exports.deleteStudentData = deleteStudentData;
module.exports.countStudentData = countStudentData;
module.exports.detailStudentData = detailStudentData;
module.exports.login = login;
