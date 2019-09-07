const authCheck = (req, res, next) => {
    const sess = req.session;
    if (sess.username) {
        next()
    } else {
        res.render('login')
    }
};


module.exports = authCheck;
