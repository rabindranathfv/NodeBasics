const argv = require('./config/yargsTodo').argv;
const colors = require('colors');

console.log(argv);

let command = argv._[0];

switch(command) {
    case 'create':
        console.log('create a todo TASK'.blue);
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