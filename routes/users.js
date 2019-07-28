var express = require('express');
var router = express.Router();
var userCtl = require('../controllers/userctl');

router.post('/login', userCtl.userLogin);
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/logout', userCtl.userLogout);
router.get('/register', userCtl.userRegister);

module.exports = router;
