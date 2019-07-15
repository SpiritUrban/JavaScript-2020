const fs = require('fs');
const log = console.log;

module.exports = put_toDo = (req, res) => {
    const id = req.params.id;
    log('id ---> ', id)
  
    fs.readFile('todos.json', 'utf-8', (err, json) => {
      if (err) return res.json({ err });
      // 2)
      const todos = JSON.parse(json);
      // 3)
      // todos.splice()
      // const new_todos = todos.filter( todo => todo.id != id)
      todos.map( (todo, i) => { 
        if (todo.id == id) todos[i].done = true 
      })
      // 4)
      const json2 = JSON.stringify(todos);
      // 5)
      fs.writeFile('todos.json', json2, (err) => {
        if (err) return res.json({ err });
        else res.json({
          ok: true
        })
      })
    });
}