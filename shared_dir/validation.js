const Joi = require("joi");

const studentSchima = {
  id: Joi.number().integer(),
  name: Joi.string().min(3).max(15).required(),
  regnumber: Joi.number().integer(),
  trade: Joi.string().min(3).max(5).required(),
  shift: Joi.string().min(1).max(5).required(),
};
const questionSchima = {
  id: Joi.number().integer(),
  question: Joi.string().min(3).max(200).required(),
  optionA: Joi.string().min(3).max(15).required(),
  optionB: Joi.string().min(3).max(15).required(),
  optionC: Joi.string().min(1).max(15).required(),
  optionD: Joi.string().min(1).max(15).required(),
  answer: Joi.number().integer(),
};
const loginSchima = {
  registerNumber: Joi.number().integer(),
  password: Joi.string().required(),
};
const resultSchima = {
  id: Joi.number().integer(),
  studentId: Joi.number().integer(),
  mark: Joi.number().integer(),
  examName: Joi.string().min(2).max(15).required(),
  remarks: Joi.string().min(0).max(500).required(),
  examDate: Joi.date(),
  remarks: Joi.string().min(0).max(500).required(),
  totalTime: Joi.string().min(1).max(6).required(),
  skipped: Joi.number().integer(),
  wrong: Joi.number().integer(),
  totalQuestions: Joi.number().integer(),
};
const schemaId = Joi.number().integer();

function validateLogin(req) {
  return Joi.validate(req.body, loginSchima);
}
function validateStudent(req) {
  return Joi.validate(req.body, studentSchima);
}
function validateQuestion(req) {
  return Joi.validate(req.body, questionSchima);
}
function validateResult(req) {
  return Joi.validate(req.body, resultSchima);
}
function validateId(req) {
  return schemaId.validate(req.params.Id);
}

module.exports.validateLogin = validateLogin;
module.exports.validateStudent = validateStudent;
module.exports.validateQuestion = validateQuestion;
module.exports.validateResult = validateResult;
module.exports.validateId = validateId;
