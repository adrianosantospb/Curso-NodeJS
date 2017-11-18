/*
    Aula 10 - Implementando Classes
    Por Adriano Santos

    Neste seguimento, iremos implementar o conceito de classes em JavaScript.
    Na verdade, com as novas implementações, o model criado para gerenciar noticias funcionará
    como um DAO.

*/

// Instancia o servidos
var server = require('./config/server');

// Inicia o serviço
server.listen(3000, function(){
    console.log('Serviço iniciado com sucesso!');
});