var express = require('express');
var router = express.Router();
var postsCtl = require('../controllers/postsctl');

router.get('/newpost', (req, res) => {
    res.render('newpost');
});

router.get('/addpost', (req, res) => {

});

router.get('/:id', (req, res) => {
    postsCtl.singlePost(req, res);
});

router.get('/:id/delete', (req, res) => {
    res.render('deletepost')
});

router.get('/:id/edit', (req, res) => {
    postsCtl.editPost(req, res);
});

module.exports = router;
