require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const config = require("config");
const routes = require("./routes");
const db = require("./db");
const logger = require("./middlewares/logger");
const debug = require("debug")("spovedanie");
const path = require("path");

db.connect();

// Middlewares
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use("/api/", routes);

// Serve files
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const port = config.get("port");
app.listen(port, function() {
  debug(`Server started to listen on port ${port}.`);
});
