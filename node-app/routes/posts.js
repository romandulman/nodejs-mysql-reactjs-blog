var express = require('express');
var router = express.Router();
var postsCtl = require('../controllers/postsctl');

router.get('/newpost', (req, res) => {
    res.render('newpost');
});

router.post('/addpost',  postsCtl.addNewPost);

router.get('/:id', postsCtl.singlePost);

router.delete('/:id/delete', postsCtl.delPost);

router.get('/:id/edit', postsCtl.editPost);

router.put('/:id/edit', postsCtl.updatePost);

module.exports = router;
