// build your `Project` model here
const db = require("../../data/dbConfig");

const getById = (id) => {
  return db("projects").where("project_id", id);
};

const getAll = async () => {
  const projects = await db("projects");
  projects.forEach((project) => {
    project.project_completed = project.project_completed === 0 ? false : true;
  });
  return projects;
};

const insert = async (project) => {
  const [id] = await db("projects").insert(project);
  const newProject = await getById(id).first();
  newProject.project_completed = newProject.project_completed =
    newProject.project_completed === 0 ? false : true;
  return newProject;
};

module.exports = {
  insert,
  getAll,
};
