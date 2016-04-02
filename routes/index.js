var express = require('express');

// attaching a "router" variable to Express's router method
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// This is the object that's actually returned as the result of a require call.
module.exports = router;
