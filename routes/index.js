var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Chelsea' });
});


/* GET projects page. */
router.get('/projects', function(req, res) {
  res.render('projects', { title: 'Projects' });
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});

/* GET contact page. */
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact' });
});

/* GET test page. */
router.get('/test', function(req, res) {
  res.render('test', { title: 'Projects' });
});

/* GET cogs page. */
router.get('/cogs187a', function(req, res) {
  res.render('cogs187a', { title: 'Cogs' });
});

module.exports = router;
