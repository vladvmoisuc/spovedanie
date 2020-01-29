const app = require("express")();
const config = require("config");
const morgan = require("morgan");
const debug = require("debug");

function logger(app) {
  if (config.get("env") === "development") {
    app.use(morgan("dev"));
    debug("Morgan middleware has been enabled.");
  }
}

module.exports = logger;
