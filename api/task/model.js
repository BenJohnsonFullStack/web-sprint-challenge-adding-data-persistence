// build your `Task` model here
const db = require("../../data/dbConfig");

const getById = (id) => {
  return db("tasks").where("task_id", id);
};

// SELECT
// p.project_id,
// project_name,
// project_description,
// project_completed,
// task_id,
// task_description,
// task_notes,
// task_completed
//     FROM projects as p
//     JOIN tasks as t
//     ON p.project_id = t.project_id;

const getAll = async () => {
  const rows = await db("projects as p")
    .join("tasks as t", "p.project_id", "t.project_id")
    .select(
      "p.project_id",
      "project_name",
      "project_description",
      "task_id",
      "task_description",
      "task_notes",
      "task_completed"
    );
  rows.forEach((task) => {
    task.task_completed = task.task_completed === 0 ? false : true;
  });
  return rows;
};

const insert = async (task) => {
  const [id] = await db("tasks").insert(task);
  const newTask = await getById(id).first();
  newTask.task_completed = newTask.task_completed =
    newTask.task_completed === 0 ? false : true;
  return newTask;
};

module.exports = {
  insert,
  getAll,
};
