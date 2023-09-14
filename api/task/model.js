// build your `Task` model here
const db = require("../../data/dbConfig");

const getById = (id) => {
  return db("tasks").where("task_id", id);
};

const getAll = async () => {
  const tasks = await db("tasks");
  tasks.forEach((task) => {
    task.task_completed = task.task_completed === 0 ? false : true;
  });
  return tasks;
};

const insert = async (task) => {
  const [id] = await db("tasks").insert(task);
  return getById(id).first();
};

module.exports = {
  insert,
  getAll,
};
