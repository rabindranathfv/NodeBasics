const fs = require('fs');
const colors = require('colors');

let todoList = [];

const saveDb = () => {
    let data = JSON.stringify(todoList);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('can save in db'.red);
    });
}

const createTask = (description) => {
    let todo = {
        description,
        completed: false
    };
    todoList.push(todo);
    saveDb();
    return todo;
};


module.exports = {
    createTask
}