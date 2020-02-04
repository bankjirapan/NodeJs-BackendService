const mysql =  require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user : "root",
    port : '33060',
    database : 'hellonode',
    password : ""
})

module.exports = pool.promise();