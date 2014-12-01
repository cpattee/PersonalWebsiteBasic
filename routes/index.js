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

/* GET category page: "Design" */
router.get('/projects/design', function(req, res) {
  res.render('design', { title: 'Design' });
});

/* GET category page: "Design" */
router.get('/projects/traditional', function(req, res) {
  res.render('traditional', { title: 'Traditional' });
});

/* GET category page: "Programs" */
router.get('/projects/programs', function(req, res) {
  res.render('programs', { title: 'Programs' });
});

/* GET category page: "Data Visualization" */
router.get('/projects/dataviz', function(req, res) {
  res.render('dataviz', { title: 'Data Visualization' });
});

/* GET project page: "condom-pope". */
router.get('/projects/design/condom-pope', function(req, res) {
  res.render('condom-pope', { title: 'Condom Pope' });
});

module.exports = router;
