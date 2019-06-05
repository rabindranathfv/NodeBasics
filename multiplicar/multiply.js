const fs = require('fs');

let createFile = (base) => {
    return new Promise((resolve, reject) => {

        if (typeof(base) === 'number') {
            let data = '';
            for (let index = 1; index < 10; index++) {
                let element = base * index;
                data += `${ index } * ${ base } = ${ element }\n`;
            }

            fs.writeFile(`tablas/tablaMulti-${base}.txt`, data, err => {
                if (err)
                    reject(err);
                else
                    resolve(`tablaMulti-${base}.txt`);
            });
        } else {
            reject(`la base no es un numero`);
            return;
        }

    });
};

module.exports = {
    createFile
};