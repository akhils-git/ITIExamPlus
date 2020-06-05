function writeGetDataResponse(res, data) {
  res.send(data);
}

function writeSaveResponse(res, req, rows) {
  res.send(rows);
}

function writeDeleteResponse(res, data) {
  res.send(data);
}

module.exports.writeGetDataResponse = writeGetDataResponse;
module.exports.writeSaveResponse = writeSaveResponse;
module.exports.writeDeleteResponse = writeDeleteResponse;
