const { v4: uuidv4 } = require('uuid');


class Task {

    id = '';
    title = '';
    done =false;
    created = null;
    finished = null;

    constructor(title) {
        this.id = uuidv4(); // TO-DO: asignar id
        this.title = '';
        this.done = false;
        this.created = new Data();

    }

}

module.exports = Task;