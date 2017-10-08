/*
    Aula 9 - Implementando Módulos
    Por Adriano Santos

    Neste seguimento, será tratado como recuperar dados de um formulário e salvar em um banco de dados.
    Para tanto, se faz necessária a instalação do modulo body-parser(npm install body-parser --save).
    Também foi inserida uma nova rota e criado um formulário.
    O Body-Parser é um middleware e trabalha com entradas e saídas de dados.
*/

// Instancia o servidos
var server = require('./config/server');

// Inicia o serviço
server.listen(3000, function(){
    console.log('Serviço iniciado com sucesso!');
});