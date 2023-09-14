// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Hello from resources");
});

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
  const resource = await resource.insert({
    resource_id,
    resource_name,
    resource_description,
  });
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.json({
    status: err.status || 500,
    message: err.message,
  });
});

module.exports = router;
