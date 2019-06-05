const argv = require('yargs')
    .command('list', 'table of multiply using nodeJs', {
        base: {
            demand: true,
            alias: 'b'
        },
        limit: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
// executara de la forma node app list -b <value>
// const multiply = require('./multiplicar/multiply');
const { createFile } = require('./multiplicar/multiply');

console.log(argv.base, argv.limit);

// createFile(base).then(file => console.log(`archivo creado ${file}`))
// .catch(e => console.log(e));