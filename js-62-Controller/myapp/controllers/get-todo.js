const fs = require('fs');

module.exports = get_toDo = (req, res) => {
    fs.readFile('todos.json', 'utf-8', (err, json) => {
        if (err) return res.json({ err });
        const todos = JSON.parse(json);
        res.render('todo', {
            title: 'ToDo',
            todos
        });
    })
}