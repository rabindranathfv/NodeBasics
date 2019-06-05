// const multiply = require('./multiplicar/multiply');
const { createFile } = require('./multiplicar/multiply');

let argv = process.argv;
let params = argv[2];
let base = Number(params.split('=')[1]);
console.log(base);

createFile(base).then(file => console.log(`archivo creado ${file}`))
    .catch(e => console.log(e));