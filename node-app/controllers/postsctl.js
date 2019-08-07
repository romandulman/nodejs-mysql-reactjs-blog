const sqlServer = require('../config/sql-server')

class postsCtl {

    allposts = (req, res) => {
        sqlServer.query('SELECT * FROM posts', (err, rows, fields) => {
            if (err) throw err;
            (req.originalUrl == '/') ? (res.render('index', {posts: rows})) : (res.send(rows))
        });
    };

    allPosts = () =>{
        sqlServer.query('SELECT * FROM posts', (err, rows, fields) => {
            if (err) throw err;
            console.log(rows)
return rows

        });
    }

    addNewPost = (req, res) => {
        let title = req.body.post.title;
        let body = req.body.post.body;
        sqlServer.query(`INSERT INTO posts (title,body) VALUES ("${title}", "${body}")`, (err, rows, fields) => {
            if (err) throw err;
        (req.originalUrl == '/') ? (res.redirect('http://localhost:3000')) : (res.send(this.allPosts()))
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
        let id = req.params.id;

        sqlServer.query(`DELETE FROM posts WHERE id = ${id} LIMIT 1`, (err, rows, fields) => {
            if (err) throw err;
            (req.originalUrl == '/') ? (res.redirect('http://localhost:3000')) : (res.send(rows))
            console.log(rows);

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