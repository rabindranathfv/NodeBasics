const argv = require('./config/yargsTodo').argv;
const colors = require('colors');
const { createTask } = require('./todo/todo');

console.log(argv);

let command = argv._[0];

switch (command) {
    case 'create':
        console.log('create a todo TASK'.blue);
        let task = createTask(argv.description);
        console.log(task);
        console.log(`the task ${task.description} is succesfully created`.green);
        break;
    case 'list':
        console.log('List of Todos '.blue);
        break;
    case 'update':
        console.log('Update a task'.blue);
        break;
    default:
        console.log('Not an existing command'.blue);
        break;
}