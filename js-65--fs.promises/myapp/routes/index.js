const log = console.log;
const express = require('../node_modules/express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', (req, res) => {
  res.render('about', { title: 'About-us' });
});

/* GET todo page. */
router.get('/todo', require('../controllers/get-todo'));

/* POST new ToDo */
router.post('/todo', require('../controllers/post-todo'));

/* EDIT new ToDo */
router.put('/todo/:id', require('../controllers/put-todo'))
// router.put('/todo/:id', (req, res)=>{ log(req) })



module.exports = router;
