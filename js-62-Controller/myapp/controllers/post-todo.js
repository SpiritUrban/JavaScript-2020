const fs = require('fs');
const log = console.log;

module.exports = post_toDo = (req, res) => {
    log(req.body)
    // 1) read file "json"
    // 2) parse json > arr
    // 3) push new ToDo in to "arr" 
    // 4) convert "arr" > json
    // 5) rewrite file "json" with new data
  
    // 1)
    fs.readFile('todos.json', 'utf-8', (err, json) => {
      if (err) return res.json({ err });
      // 2)
      const todos = JSON.parse(json);
      // 3)
      todos.push({
        title: req.body.title,
        description: req.body.description,
        done: false,
        id: 'id'+ Math.random() + Math.random()
      })
      // 4)
      const json2 = JSON.stringify(todos);
      // 5)
      fs.writeFile('todos.json', json2, (err) => {
        if (err) return res.json({ err });
        res.json({
          ok: true
        })
      })
    });
}