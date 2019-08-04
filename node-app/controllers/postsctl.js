const sqlServer = require('../config/sql-server')

class postsCtl {

    allposts = (api,req, res) => {

        sqlServer.query('SELECT * FROM posts', (err, rows, fields) => {
            if (err) throw err;

            if (api == false){
                res.render('index', {posts: rows})
            }
            if (api == true){
                res.send(rows)
            }

        });


    };
    addNewPost = (req, res) => {
        let title = req.body.post.title;
        let body = req.body.post.body;
        console.log(title);
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
            res.render('editpost', {post: rows[0]})
        })
    }

    updatePost = (req, res) => {
        let id = req.params.id;
        let title = req.body.title;
        let body = req.body.body;
        sqlServer.query(`UPDATE posts SET title = "${title}" , body= "${body}" WHERE id = ${id}`, (err, rows, fields) => {
            if (err) throw err;
            res.redirect("/");
        })
    }

}

module.exports = new postsCtl;