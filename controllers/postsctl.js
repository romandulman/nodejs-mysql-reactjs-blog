
const sqlServer = require('../config/sql-server')

class  postsCtl {

    allposts = () => {
        sqlServer.connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
        });

    }


}

module.exports =  new postsCtl ;