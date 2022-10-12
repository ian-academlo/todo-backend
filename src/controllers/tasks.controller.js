const TasksServices = require("../services/tasks.services");

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await TasksServices.getAll();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

const createTasks = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;
    const newTask = {
      title,
      description,
      status,
    };
    const task = await TasksServices.create(newTask);
    return res.json(task);
  } catch (error) {
    next(error);
  }
};

const updateTasks = async (req, res, next) => {
  try {
    const { status, id } = req.body;
    const updateTask = {
      status,
    };
    const task = await TasksServices.update(updateTask, id);
    return res.json(task);
  } catch (error) {
    next(error);
  }
};

const deleteTasks = async (req, res, next) => {
  try {
    const { id } = req.body;
    const task = await TasksServices.delete(id);
    return res.json(task);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTasks,
  createTasks,
  updateTasks,
  deleteTasks,
};
