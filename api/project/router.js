// build your `/api/projects` router here
const express = require("express");
const Project = require("./model");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const newProject = req.body;
  try {
    console.log(req.body);
    const project = await Project.insert(newProject);
    res.status(201).json(project);
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
