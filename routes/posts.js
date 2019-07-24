var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/newpost', function(req, res, next) {
    res.render('newpost');
});
router.get('/addpost', function(req, res, next) {

});
router.get('/:id', function(req, res, next) {

});
router.get('/:id/del', function(req, res, next) {
    res.render('deletepost')

});

router.get('/:id/edit', function(req, res, next) {
res.render('editpost')
});

module.exports = router;
