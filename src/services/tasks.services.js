const { tasks } = require("../models");

class TasksServices {
  static async getAll() {
    try {
      let results = await tasks.findAll();
      return results;
    } catch (error) {
      throw error;
    }
  }

  static async create(task) {
    try {
      let result = await tasks.create(task);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(updateTask, id) {
    let result = await tasks.update(updateTask, { where: { id } });
    return result;
    try {
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      let result = await tasks.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TasksServices;
