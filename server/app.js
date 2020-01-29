const express = require("express");
const app = express();
const helmet = require("helmet");
const config = require("config");
const routes = require("./routes");
const db = require("./db");
const logger = require("./middlewares/logger");
const debug = require("debug")("spovedanie");

db.connect();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use("/api/", routes);

const port = config.get("port");

app.listen(port, function() {
  debug(`Server started to listen on port ${port}.`);
});
