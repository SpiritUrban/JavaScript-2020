const db = require('../my_modules/db-json');
const log = console.log;

module.exports = put_toDo = async (req, res) => {
  try {
    const id = req.params.id;
    const ok = await db.edit('todos.json', id, { done: true})
    res.json({ ok });
  } catch (err) {
    res.json({ err })
  }
}