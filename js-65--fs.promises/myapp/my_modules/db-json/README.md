# db-json
DB based on json on you fs.

## Installation
```sh
$ ... (should be in future)
```

## API
```js
const db = require('../my_modules/db-json');
```

### db.get(fileName)
Gets all records.
```js
const obj = await db.get('todos.json')
// [{id: 43434.33434, some: 'else'}, {..}]
```

### db.post(fileName)
Gets all records.
```js
const ok = await db.post('todos.json', record)
// true
```

### db.put(fileName)
Gets all records.
```js
const ok = await db.edit('todos.json', id, { some_key: true, other: '' })
// true
```


## Example
The following example for using module in controller
```js
const db = require('../my_modules/db-json');
const get_toDo = async (req, res) => {
    try {
        const obj = await db.get('todos.json')
        console.log(obj)
    } catch (err) {
        console.log(err)
    }
}
get_toDo().then();
```


## Example
The following example for using module in controller
```js
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