const mysql = require('mysql');

// Criando conexão com o banco de dados.
const conexao = mysql.createConnection({
    "host" : "localhost",
    "port" : 3306,
    "user" : "user",
    "password" : "bcd127",
    "database" : "hospital"
});

module.exports = conexao;