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

/* GET projects/graphics page. */
router.get('/projects/design', function(req, res) {
  res.render('design', { title: 'Projects' });
});

/* GET category page: "Design" */
router.get('/projects/traditional', function(req, res) {
  res.render('traditional', { title: 'Projects' });
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
router.get('/project_template', function(req, res) {
  res.render('project_template', { title: 'Project Title' });
});

/* GET category page: "Programs" */
router.get('/projects/programs', function(req, res) {
  res.render('programs', { title: 'Programs' });
});

/* GET category page: "Installations" */
router.get('/projects/installations', function(req, res) {
  res.render('installations', { title: 'Installations' });
});

/* GET category page: "Data Visualization" */
router.get('/projects/dataviz', function(req, res) {
  res.render('dataviz', { title: 'Projects' });
});

/* GET category page: "UXUI" */
router.get('/projects/uxui', function(req, res) {
  res.render('uxui', { title: 'User Experience & User Interface' });
});

/* GET project page: "condom-pope". */
router.get('/projects/installations/condom-pope', function(req, res) {
  res.render('condom-pope', { title: 'Condom Pope' });
});

/* GET project page: "programs2". */
router.get('/projects/programs/programs2', function(req, res) {
  res.render('programs2', { title: 'Programs' });
});

module.exports = router;
