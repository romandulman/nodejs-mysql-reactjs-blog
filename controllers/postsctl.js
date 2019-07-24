const sqlServer = require('../config/sql-server')

class postsCtl {

    allposts = (req, res) => {
        sqlServer.query('SELECT * FROM posts', (err, rows, fields) => {
            if (err) throw err;
            res.render('index', {posts: rows})
        });

    };
    singlePost = (req, res) => {
        let id = req.params.id;
        sqlServer.query(`SELECT * FROM posts WHERE id = ${id} LIMIT 1`, (err, rows, fields) => {
            if (err) throw err;
            res.render('single', {post: rows[0]})
        })
    };

    delPost = (req, res) => {

    };

    editPost = (req, res) => {
        let id = req.params.id;
        sqlServer.query(`SELECT * FROM posts WHERE id = ${id} LIMIT 1`, (err, rows, fields) => {
            if (err) throw err;
            res.render('edit', {post: rows[0]})
        })
    }

}

module.exports = new postsCtl;