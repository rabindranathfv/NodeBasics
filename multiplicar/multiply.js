const fs = require('fs');
const colors = require('colors');

let listTable = (base, limit) => {
    return new Promise( (resolve, reject) => {
        if (!Number(base) || !Number(limit)) {
            reject('base and limit are not numbers');
        } else {
            let data = '';
            for (let index = 1; index <= limit; index++) {
                let element = base * index;
                data += `${ index } * ${ base } = ${ element }\n`;
            }
            resolve(data.blue);
        }
    });
}

let createFile = (base, limit) => {
    return new Promise((resolve, reject) => {

        if (typeof(base) === 'number') {
            let data = '';
            for (let index = 1; index <= limit; index++) {
                let element = base * index;
                data += `${ index } * ${ base } = ${ element }\n`;
            }

            fs.writeFile(`tablas/tablaMulti-${base}-${limit}.txt`, data, err => {
                if (err)
                    reject(err);
                else
                    resolve(`tablaMulti-${base}-${limit}.txt`.green);
            });
        } else {
            reject(`la base no es un numero`);
            return;
        }

    });
};

module.exports = {
    createFile,
    listTable
};