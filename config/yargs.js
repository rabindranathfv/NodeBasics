const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('list', 'table of multiply using nodeJs', opts)
    .command('create', 'create table by using base and lmit', opts)
    .help()
    .argv;

module.exports = {
    argv
}