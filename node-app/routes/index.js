var express = require('express');
var router = express.Router();
var postsCtl = require('../controllers/postsctl');

const checkAuth = (req, res, next) => {
    const sess = req.session;
    if (sess.username) {
        next()
    } else {
        res.render('login')
    }
};

router.get('/', checkAuth, postsCtl.allposts);

module.exports = router;
