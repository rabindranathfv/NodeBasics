const argv = require('./config/yargs').argv;
const colors = require('colors');

// executara de la forma node app list -b <value>
// const multiply = require('./multiplicar/multiply');
const { createFile, listTable } = require('./multiplicar/multiply');

let command = argv._[0];

switch (command) {
    case 'list':
        listTable(argv.base, argv.limit).then( table => {
            console.log(table);
        }).catch( e => console.log(e.red));
        break;
    case 'create':
        createFile(argv.base, argv.limit).then(file => console.log(`archivo creado ${file}`))
                .catch(e => console.log(e.green));
        break;

    default:
        console.log('no command found');
        break;

}

// console.log(argv.base, argv.limit);

