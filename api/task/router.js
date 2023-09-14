// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");
const { validateTask } = require("./middleware");

const router = express.Router();

router.post("/", validateTask, async (req, res, next) => {
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
  res.status(err.status).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = router;
