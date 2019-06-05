// const multiply = require('./multiplicar/multiply');
const { createFile } = require('./multiplicar/multiply');
let base = '22';


createFile(base).then(file => console.log(`archivo creado ${file}`))
    .catch(e => console.log(e));