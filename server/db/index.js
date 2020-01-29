const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("spovedanie");

function connect() {
  mongoose
    .connect(config.get("connection"), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => debug("Connected to MongoDB."))
    .catch(err => debug("Could not connect to MongoDB because:", err));
}

module.exports = {
  connect
};
