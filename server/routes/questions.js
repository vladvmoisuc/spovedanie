const express = require("express");
const router = express.Router();
const Question = require("../models/question");
const auth = require("../middlewares/auth");
const splitParamList = require("../utils").splitParamList;

// Get
router.get("/questions", async (req, res) => {
  const queryParams = splitParamList(req.query, "categories", "category");
  try {
    let questions;
    if (queryParams) {
      questions = await Question.find().or(queryParams);
    } else {
      questions = await Question.find();
    }
    return res.status(200).send(questions);
  } catch (err) {
    res.status(404).send("There is no question that matches your search.");
  }
});

router.get("/questions/:category", async (req, res) => {
  try {
    const categoryQuestions = await Question.find({
      category: req.params.category
    });
    return res.status(200).send(categoryQuestions);
  } catch (err) {
    res.status(404).send("There are no questions that matches your search.");
  }
});

router.get("/questions/:category/:id", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    return res.status(200).send(question);
  } catch (err) {
    res.status(404).send("There is no question that matches your search.");
  }
});

// Post
router.post("/questions", auth, async (req, res) => {
  try {
    await new Question(req.body).save();
    return res.status(201).send(question);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Put
router.put("/questions/:id", auth, async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.status(200).send(question);
  } catch (err) {
    res
      .status(400)
      .send(`You are trying to modify a question that doesn't exist.`);
  }
});

// Delete
router.delete("/questions/:id", auth, async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    return res.status(204).send("The questions has just been deleted.");
  } catch (err) {
    res.status(404).send("There is no question that matches your search.");
  }
});

module.exports = router;
