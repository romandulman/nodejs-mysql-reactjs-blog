var express = require('express');
var router = express.Router();
var postsCtl = require('../controllers/postsctl');

router.get('/', function(req, res) {
postsCtl.allposts(req,res)
});
module.exports = router;
