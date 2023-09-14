const Project = require("../project/model");

const validateTask = async (req, res, next) => {
  try {
    const projects = await Project.getAll();
    const { project_id, task_description } = req.body;
    const exists = projects.find((element) => {
      const existingProject = element.project_id === project_id;
      return existingProject;
    });
    if (!task_description || !project_id) {
      next({ status: 422 });
    } else if (!exists) {
      next({ status: 404 });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  validateTask,
};
