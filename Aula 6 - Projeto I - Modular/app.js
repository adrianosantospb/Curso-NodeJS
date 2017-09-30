/*
    Aula 6 - Primeiro projeto - Modular
    Por Adriano Santos

    Projeto de um sistema de notícia, agora, receberá as primeiras instruções de modularização.

    Inicialmente, será criado um diretório denominado "config" para isolarmos as configurações referêntes ao funcionament
    do servido.
    Na segunda etapa, foi criada uma pasta chamada app e a pasta view foi movida para ela. Além disso, foi criada uma pasta 
    para a criação das rotas.
    Depois de criados os arquivos módulos de rotas, faz-se a importação para o app.js. Perceba que foram criadas funções. 
    Isso se faz necessário porque os scripts deverão ser executados.
*/

var server = require('./config/server')

// Chamada das rotas.
var rotaHome = require('./app/routes/home')(server);
var rotaNoticias = require('./app/routes/noticias')(server);
var rotaAdmin = require('./app/routes/admin')(server);

// Habilita a escuta de requisições via browser.
server.listen(3000, function(){
    console.log('Serviço iniciado com sucesso!');
});