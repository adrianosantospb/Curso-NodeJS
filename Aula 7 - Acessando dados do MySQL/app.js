/*
    Aula 7 - Aplicação que acessa um banco de dados
    Por Adriano Santos

    Neste exemplo, eu criei uma app NodeJS que se integra como banco de dados MySql. Segue as mesmas configurações
    das aulas passada. Porém, reduzi para apenas duas views (home, cadastro).

    Tambem foi inserido o Consign para gerenciar os módulos (npm install consign --save)
*/

// Instancia o servidos
var server = require('./config/server');

// Inicia o serviço
server.listen(3000, function(){
    console.log('Serviço iniciado com sucesso!');
});