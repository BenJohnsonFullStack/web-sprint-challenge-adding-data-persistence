// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const newResource = req.body;
  try {
    const resource = await Resource.insert(newResource);
    res.status(201).json(resource);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resource.getAll();
    res.json(resources);
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
