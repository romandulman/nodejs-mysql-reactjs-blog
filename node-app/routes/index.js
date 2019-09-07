var express = require('express');
var router = express.Router();
var postsCtl = require('../controllers/postsctl');
const authCheck = require('../middlewares/authCheck');


router.get('/', authCheck(), postsCtl.allposts);

module.exports = router;
