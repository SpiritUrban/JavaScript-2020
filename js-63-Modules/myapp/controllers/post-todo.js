const log = console.log;
const db = require('../my_modules/db-json');

module.exports = post_toDo = async (req, res) => {
  try {
    const ok = await db.post('todos.json', req.body)
    res.json({ ok });
  } catch (err) {
    res.json({ err })
  }
}