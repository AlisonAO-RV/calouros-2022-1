const { Router } = require("express");
const mysql = require("mysql");

const routes = new Router();

const db = mysql.createPool({
  host: "108.179.193.5",
  user: "dakin853_aao2022",
  password: "AAO@31220aao",
  database: "dakin853_calouros_2022_1",
});

routes.get("/test", (req, res) => {
  return res.json({ message: "OK!" });
});

routes.get("/into", (req, res) => {
  let SQL =
    "INSERT INTO user (Nome, email, senha, tipo) VALUES ('Alison Alain de Oliveira', 'alisonrv@msn.com', 'AAO@31220aao', 'admin' )";

  db.query(SQL, (err, result) => {
    console.log;
  });
});

module.exports = routes;
