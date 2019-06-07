const optsTodo = {
    description: {
        demand: true,
        alias: 'd'
    }
};

const optsTodoList = {
    completed: {
        alias: 'c',
        default: true
    }
};

const optsTodoUpdate = {
    description: {
        demand: true,
        alias: 'd'
    },
    completed: {
        alias: 'c',
        default: true
    }
};

const argv = require('yargs')
    .command('create', 'create a new task in todos App', optsTodo)
    .command('list', 'List all Todos App', optsTodoList)
    .command('update', 'Update a Todo Task', optsTodoUpdate)
    .command('delete', 'delete a Todo Task', optsTodo)
    .help()
    .argv;

module.exports = {
    argv
}