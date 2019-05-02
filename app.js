const fs = require('fs');

let base = 2;
let data = '';
for (let index = 1; index < 10; index++) {
    let element = base * index;
    data += `${ index } * ${ base } = ${ element }\n`;
}

fs.writeFile('tablas/tablaMulti.txt', data, err => {
    if (err) throw err;
    console.log('the file has been saved');

});