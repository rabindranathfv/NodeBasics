const fs = require('fs');

let base = 2;

for (let index = 1; index < 10; index++) {
    let element = base * index;
    console.log(`${ index } * ${ base } = ${ element }`);
}

fs.writeFile('message.txt', 'hello node js', err => {
    if (err) throw err;
    console.log('the file has been saved');

});