const fs = require('fs');
const colors = require('colors');
const db = require('../db/data.json');

let todoList = [];

const loadDb = () => {
    try {
        todoList = [...db];
    } catch (e) {
        todoList = [];
    }

}


const saveDb = () => {
    let data = JSON.stringify(todoList);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('can save in db'.red, err);
    });
}

const createTodo = (description) => {
    loadDb();
    let newTodo = {
        description,
        completed: false
    };
    todoList.push(newTodo);
    saveDb();
    return newTodo;
};

const getTodos = () => {
    return db;
}


module.exports = {
    createTodo,
    getTodos
};