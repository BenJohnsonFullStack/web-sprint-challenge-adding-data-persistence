// build your `Resource` model here
const db = require("../../data/dbConfig");

const getById = (id) => {
  return db("resources").where("resource_id", id);
};

const insert = async (resource) => {
  const [id] = await db("resources").insert(resource);
  return getById(id).first();
};

module.exports = {
  insert,
};
