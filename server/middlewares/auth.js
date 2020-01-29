const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const privateKey = config.get("jwtPrivateKey");
  if (!privateKey)
    return res.status(400).send("Fatal Error: jwtPrivateKey is not defined.");

  const token = req.header("X-Authorization-Token");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const tokenPayload = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = tokenPayload;
    next();
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
}

module.exports = auth;
