const express = require("express");
const router = express.Router();
const User = require("../models/user");
const encryptPassword = require("../utils").encryptPassword;

router.post("/", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User is already registered.");

    const password = await encryptPassword(req.body.password);
    user = await new User({
      username: req.body.username,
      password
    }).save();
    return res.status(201).send({
      username: user.username
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
