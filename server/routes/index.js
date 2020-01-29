const express = require("express");
const router = express.Router();
const login = require("./login");
const users = require("./users");
const questions = require("./questions");

router.use("/login/", login);
// router.use("/users/", users);
router.use("/", questions);

module.exports = router;
