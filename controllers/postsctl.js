const sqlServer = require('../config/sql-server')

class postsCtl {

    allposts = (req, res) => {
        sqlServer.query('SELECT * FROM posts', (err, rows, fields) => {
            if (err) throw err;
            res.render('index', {posts: rows})
        });

    };
    addNewPost = (req, res) => {
        let title = req.body.title;
        let body = req.body.body;

        sqlServer.query(`INSERT INTO posts (title,body) VALUES ("${title}", "${body}")`, (err, rows, fields) => {
            if (err) throw err;
        });

        res.redirect('http://localhost:3000')

    };
    singlePost = (req, res) => {
        let id = req.params.id;
        sqlServer.query(`SELECT * FROM posts WHERE id = ${id} LIMIT 1`, (err, rows, fields) => {
            if (err) throw err;
            res.render('single', {post: rows[0]})
        })
    };

    delPost = (req, res) => {
        let id = req.params.id;
        console.log(id);

        sqlServer.query(`DELETE FROM posts WHERE id = ${id} LIMIT 1`, (err, rows, fields) => {
            if (err) throw err;
          res.redirect('http://localhost:3000')
        })
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