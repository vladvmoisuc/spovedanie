const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

router.post("/", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid username or password.");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send("Invalid username or password.");
    }

    const token = user.generateAuthToken();

    res
      .header("X-Authorization-Token", token)
      .json("You have been successfully logged in.");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
