var express = require('express');
const session = require('express-session');
var router = express.Router();
var userCtl = require('../controllers/userctl');

const checkAuth =(req,res,next) =>{
    const sess = req.session;
    if(sess.username) {
        next()
    }else{
        res.render('login')
    }
}


router.post('/login', userCtl.userLogin);

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/logout', userCtl.userLogout);

router.get('/register', userCtl.userRegister);

router.get('/profile',checkAuth, (req, res) => {
    res.render('profile');
});
module.exports = router;
