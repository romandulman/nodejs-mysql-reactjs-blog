var express = require('express');
var router = express.Router();
var postsCtl = require('../controllers/postsctl');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;
