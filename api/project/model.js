// build your `Project` model here
const db = require("../../data/dbConfig");

const getById = (id) => {
  return db("projects").where("project_id", id);
};

const getAll = () => {
  return db("projects");
};

const insert = async (project) => {
  const [id] = await db("projects").insert(project);
  return getById(id).first();
};

module.exports = {
  insert,
  getAll,
};
