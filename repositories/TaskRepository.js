const Task = require("../models/Task");

class TaskRepository {
  
  _tasks = null;

  constructor() {
    this._tasks = [];
  }

  getAllTask() {
    return this._tasks;
  }

  /**
   *
   * @param {String} title
   *
   * TODO: Nos falta persistir datos en archivo
   *
   */

  createTask(title) {
    const task = new Task(title);
    this._tasks.push(task);
  }

  deleteTask() {}

  completeTask() {}
}

module.exports = TaskRepository;
