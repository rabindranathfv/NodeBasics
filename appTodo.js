const argv = require('./config/yargsTodo').argv;
const colors = require('colors');
const todosAPI = require('./todo/todo');

console.log(argv);

let command = argv._[0];

switch (command) {
    case 'create':
        console.log('create a todo TASK'.blue);
        let task = todosAPI.createTodo(argv.description);
        console.log(task);
        console.log(`the task ${task.description} is succesfully created`.green);
        break;
    case 'list':
        console.log('List of Todos '.green);
        let list = todosAPI.getTodos();
        for (const todo of list) {
            console.log('*****************'.green);
            console.log(`description Todo ${todo.description}`);
            console.log(`State: ${todo.completed}`);
        }
        console.log('*****************'.green);
        break;
    case 'update':
        console.log('Update a task'.blue);
        break;
    default:
        console.log('Not an existing command'.blue);
        break;
}