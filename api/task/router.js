// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const newtask = req.body;
  try {
    const task = await Task.insert(newtask);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.getAll();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.json({
    status: err.status || 500,
    message: err.message,
  });
});

module.exports = router;
