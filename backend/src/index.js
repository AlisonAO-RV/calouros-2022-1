const express = require("express");
const routes = require("./routes");
const mysql = require("mysql");

class Index {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
  }
  routes() {
    this.app.use(routes);
  }
}

module.exports = new Index().app;
