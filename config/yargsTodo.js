const completed = {
    alias: 'c',
    default: true
};

const description = {
    demand: true,
    alias: 'd'
};

const argv = require('yargs')
    .command('create', 'create a new task in todos App', { description })
    .command('list', 'List all Todos App', { completed })
    .command('update', 'Update a Todo Task', { description, completed })
    .command('delete', 'delete a Todo Task', { description })
    .help()
    .argv;

module.exports = {
    argv
}