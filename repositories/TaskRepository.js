import Task from "../models/Task);";

class TaskRepository {

    _tasks = null;

    constructor() {
        this._tasks = [];
    }

    getAllTask() {

    }

    /**
     * 
     * @param {String} title
     * 
     * TODO: Nos falta persistir datos en archivo 
     *      
     */

    createTask(task) {
        const task = new Task(title);
        this._tasks.push(task);
        return this._tasks;

    }

    deleteTask() {

    }

    completeTask() {

    }






}