// Importando a biblioteca do BD
var mysql = require('mysql');

// Cria uma variável que retorna uma função. Isso evita que uma conexão seja criada em toda chamada.
var myConnection = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'sistema_noticias'
    });
};

// Adiciona o módulo (simula uma factory de conexão)
module.exports = function(){
    return myConnection;    
};


