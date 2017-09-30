/*
    Aula 8 - Aplicação que acessa um banco de dados - Refactoring DB
    Por Adriano Santos

    Neste exemplo, eu utilizei o consign para incorporar a conexão do banco de dados. Isso possibilita o re-uso
    do modulo de banco de dados nas demais modulos.
*/

// Instancia o servidos
var server = require('./config/server');

// Inicia o serviço
server.listen(3000, function(){
    console.log('Serviço iniciado com sucesso!');
});