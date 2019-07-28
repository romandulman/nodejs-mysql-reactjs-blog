const sqlServer = require('../config/sql-server')


class userctl {
    static userLogin =(req,res) =>{
        const sess = req.session;
        sess.username = req.body.username;
        sess.pswd = req.body.pswd;
        /// for testing purpose only ...
        if (sess.username=='user'){
            res.redirect('/')
        }
    };

    static userLogout =(req,res) =>{
        req.session.destroy((err) => {
            if(err) {
                return console.log(err);
            }
            res.redirect('/');
        });
    } ;

    static userRegister =(req, res) => {

            let username = req.body.username;
            let password = req.body.password;
            let email = req.body.email;
            let lname = req.body.lname;
            let fname = req.body.fname;
            sqlServer.query(`INSERT INTO users (username, password, email, first_name, last_name) VALUES ("${username}", "${password}", "${email}", "${lname}", "${fname}")`, function (err, rows, fields) {
                if (err) throw err
                console.log('The solution is: ', rows);
                res.redirect("/");
            })

    }
}

module.exports = userctl;