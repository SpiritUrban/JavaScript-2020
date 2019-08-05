/*!
 * db-json
 * Copyright(c) 2019 Dyachuk Vitaliy Andriyovich
 * MIT Licensed
 */
const fs = require('fs');
const _fs = require('fs').promises;


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
async function get(fileName) {
  try {
    const json = await _fs.readFile(fileName, 'utf-8')
    return JSON.parse(json)
  } catch (err) { throw err }
}

/**
 * Post record.
 *
 * @param {string} fileName
 * @param {object} record
 * @return {object}
 * @public
 */
async function post(fileName, record) {
  try {
    // read all records
    const todos = await getRecords(fileName);
    // add new record
    todos.push({
      title: record.title,
      description: record.description,
      done: false,
      id: 'id' + Math.random() + Math.random()
    });
    // save all records
    await setRecords(fileName, todos);
    // ->
    return true
  } catch (err) { throw err }
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
async function edit(fileName, id, fields) {
  try {
    // get all records
    const records = await getRecords(fileName);
    // change several fields (in record)
    const modified_records = updateRecords(records, id, fields);
    // save all records
    await setRecords(fileName, modified_records)
    // ->
    return true
  } catch (err) { throw err }
}

/**
 * Delete record. !!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * @param {string} fileName
 * @param {string} id
 * @return {object}
 * @public
 */
async function del(fileName, id) {
  try {
    // get all records
    const todos = await getRecords(fileName);
    // for deleting
    todos.splice() // ????????
    const modified_todos = todos.filter(todo => todo.id != id)
    // save all records
    await setRecords(fileName, modified_todos)
    // ->
    return true
  } catch (err) { throw err }
}



////////////////////////////////////////////////////////////
//                         private                        //
////////////////////////////////////////////////////////////

/**
 * Get records.
 *
 * @param {string} fileName
 * @return {object}
 * @return {object} array
 */
async function getRecords(fileName) {
  const json = await _fs.readFile(fileName, 'utf-8') //... 1
  return JSON.parse(json); //...................... 2
}

/**
 * Set records.
 *
 * @param {string} fileName
 * @param {object} fileName
 * @return {undefined} .............!!!!! ???? null or true
 * @private
 */
async function setRecords(fileName, todos) {
  const json2 = JSON.stringify(todos); //................. 4
  await _fs.writeFile(fileName, json2) //....................... 5
}

/**
 * Update records.
 *
 * @param {array} todos
 * @param {string} id
 * @param {object} fields
 * @return {array} array
 * @private
 */
function updateRecords(records, id, fields) {
  records.map((record, i) => {
    // 1) teke record by id 
    if (record.id == id) {
      // 2) change several fields
      for (let key in fields) {
        records[i][key] = fields[key]
      }
    }
  })
  return records
}



exports.get = get;
exports.post = post;
exports.edit = edit;
exports.del = del;