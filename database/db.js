const mysql = require('mysql');
 const connection = mysql.createConnection({
    host: process.env.BD_HOST,
    user:process.env.DB_USER ,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((error) => {
    if(error){
        console.log('el error de conexión es: '+error);
        return;
    }
    console.log('Conectado a la base de datos');
});

//Exportar el módulo
module.exports = connection;
