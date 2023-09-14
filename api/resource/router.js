// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const newResource = req.body;
  try {
    const resources = await Resource.getAll();
    resources.forEach((element) => {
      if (element.resource_name === newResource.resource_name) {
        res.status(422).json("A resource with this name already exists");
      }
    });
    const resource = await Resource.insert(newResource);
    res.json(resource);
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
