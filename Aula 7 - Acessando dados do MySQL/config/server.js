// Importação dos módulos estruturais
var express = require('express');
var server = express();
var consign = require('consign');


// Definição do EJS como módulo responsável por renderizar as views
server.set('view engine', 'ejs');
server.set('views', './app/views' );

// Injeção das rotas
consign().include('app/routes/').into(server);

// Adiciona aos módulos
module.exports = server;
