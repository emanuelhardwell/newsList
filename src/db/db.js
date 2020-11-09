/*
 */
const mysql = require("mysql");

module.exports = () => {
  return mysql.createConnection({
    host: "localhost",
    database: "newslist",
    user: "emanuel",
    password: "emanuel100",
  });
};
  