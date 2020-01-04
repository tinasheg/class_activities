const mysql = require('mysql')
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "playlistApp_db"
})

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    connection.query("SELECT * from playlist", (err, res) => {
        if (err) throw err;
        console.log(res[2]);
    })
    
})