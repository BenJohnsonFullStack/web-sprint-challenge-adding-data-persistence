// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { resource_id } = req.params;
  const { resource_name, resource_description } = req.body;
  try {
    const result = await Resource.insert({
      resource_id,
      resource_name,
      resource_description,
    });
    res.status(201).json(result);
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
