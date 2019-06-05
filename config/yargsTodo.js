const optsTodo = {
    task: {
        demand: true,
        alias: 'd'
    },
    completed: {
        alias: 'c',
        default: false
    }
};

const optsTodoList = {
    completed: {
        alias: 'c',
        default: false
    }
};

const argv = require('yargs')
    .command('create', 'create a new task in todos App', optsTodo)
    .command('list', 'List all Todos App', optsTodoList)
    .command('update', 'Update a Todo Task', optsTodoList)
    .help()
    .argv;

module.exports = {
    argv
}