const fs = require('fs');
const colors = require('colors');
const db = require('../db/data.json');

let todoList = [];

const loadDb = () => {
    todoList = [...db];
    console.log('ALL DB', todoList);
    console.log('*********');
}


const saveDb = () => {
    let data = JSON.stringify(todoList);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('can save in db'.red, err);
    });
}

const createTask = (description) => {
    loadDb();
    let newTodo = {
        description,
        completed: false
    };
    todoList.push(newTodo);
    saveDb();
    return newTodo;
};


module.exports = {
    createTask
};