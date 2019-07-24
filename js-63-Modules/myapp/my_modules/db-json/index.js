/*!
 * db-json
 * Copyright(c) 2019 Dyachuk Vitaliy Andriyovich
 * MIT Licensed
 */

const fs = require('fs');


/**
 * Module variables.
 * @private
 */

var example = null;


/**
 * Get records.
 *
 * @param {string} fileName
 * @return {object}
 * @public
 */
function get(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, json) => {
      if (err) reject(err)
      resolve(JSON.parse(json))
    })
  })
}


/**
 * Post record.
 *
 * @param {string} fileName
 * @param {object} record
 * @return {object}
 * @public
 */
function post(fileName, record) {
  return new Promise((resolve, reject) => {

    // 1) read file "json"
    // 2) parse json > arr
    // 3) push new ToDo in to "arr" 
    // 4) convert "arr" > json
    // 5) rewrite file "json" with new data

    // 1)
    fs.readFile(fileName, 'utf-8', (err, json) => {
      if (err) reject(err);
      // 2)
      const todos = JSON.parse(json);
      // 3)
      todos.push({
        title: record.title,
        description: record.description,
        done: false,
        id: 'id' + Math.random() + Math.random()
      })
      // 4)
      const json2 = JSON.stringify(todos);
      // 5)
      fs.writeFile(fileName, json2, (err) => {
        if (err) reject(err);
        resolve(true)
      })
    });


  })
}



/**
 * Edit record.
 *
 * @param {string} fileName
 * @param {string} id
 * @param {object} fields that mast by changed. Example: {done: true, title: 'works'}
 * @return {object}
 * @public
 */
function edit(fileName, id, fields) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, 'utf-8', (err, json) => {
      if (err) reject(err);
      // 2)
      const todos = JSON.parse(json);
      // 3)
      // todos.splice()
      // const new_todos = todos.filter( todo => todo.id != id)
      todos.map((todo, i) => {
        if (todo.id == id) {
          for (let key in fields) {
            todos[i][key] = fields[key]
          }
        }
      })
      // 4)
      const json2 = JSON.stringify(todos);
      // 5)
      fs.writeFile(fileName, json2, (err) => {
        if (err) reject(err);
        resolve(true)
      })
    });

  })
}


exports.get = get;
exports.post = post;
exports.edit = edit;

