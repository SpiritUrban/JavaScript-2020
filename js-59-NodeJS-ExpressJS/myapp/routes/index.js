var express = require('../node_modules/express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About-us' });
});

/* GET some info. */
router.get('/some-info', function(req, res, next) {
  res.json({
    some: 'info',
    hello: 'express'
  })
});


module.exports = router;
