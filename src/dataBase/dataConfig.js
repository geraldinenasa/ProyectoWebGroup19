const mysql = require('mysql2');
const pool = mysql.createPool({
    host:'sql10.freesqldatabase.com',
    user: 'sql10716372',
    password: 'cEXCvj4iit',
    database: 'sql10716372',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err) => {
    if (err) {
        console.error('Hubo un error en la conexión de la B.D',{'error': err});
    } else {
        console.log('Conexión a B.D. establecida');
    }
});

module.exports = pool;