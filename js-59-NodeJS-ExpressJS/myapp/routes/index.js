const log = console.log;
const express = require('../node_modules/express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About-us' });
});

/* GET some info. */
router.get('/some-info', function (req, res, next) {
  res.json({
    some: 'info',
    hello: 'express'
  })
});



/* GET todo page. */
router.get('/todo', function (req, res, next) {
  fs.readFile('todos.json', 'utf-8', (err, json) => {
    if (err) return res.json({ err });
    const todos = JSON.parse(json);
    res.render('todo', {
      title: 'ToDo',
      todos
    });
  })
});

/* POST new ToDo */
router.post('/todo', function (req, res, next) {
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

});


router.put('/todo/:id', function (req, res, next) {
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
  
  
})


module.exports = router;


