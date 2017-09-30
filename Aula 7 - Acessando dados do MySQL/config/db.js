// Importando a biblioteca do BD
var mysql = require('mysql');

// Adiciona o módulo (simula uma factory de conexão)
module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'sistema_noticias'
    });    
};


