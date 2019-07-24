const db = require('../my_modules/db-json');

module.exports = get_toDo = async (req, res) => {
    try {
        const obj = await db.get('todos.json')
        res.render('todo', {
            title: 'ToDo',
            todos: obj
        });
    } catch (err) {
        res.json({ err })
    }
}