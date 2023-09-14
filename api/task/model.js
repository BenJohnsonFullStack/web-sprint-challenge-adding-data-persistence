// build your `Task` model here
const db = require("../../data/dbConfig");

const getById = (id) => {
  return db("tasks").where("task_id", id);
};

const getAll = () => {
  return db("tasks");
};

const insert = async (task) => {
  const [id] = await db("tasks").insert(task);
  return getById(id).first();
};

module.exports = {
  insert,
  getAll,
};
