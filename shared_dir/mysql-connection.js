const express = require("express");
const mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "8046@entAA",
  database: "ITI",
});
connection.connect((error) => {
  console.log(error);
});

module.exports = connection;
