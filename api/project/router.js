// build your `/api/projects` router here
const express = require("express");
const Project = require("./model");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const newProject = req.body;
  try {
    if (!newProject.project_name) {
      res.status(422).json("Project name required");
    } else {
      const project = await Project.insert(newProject);
      res.status(201).json(project);
    }
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.getAll();
    res.json(projects);
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
