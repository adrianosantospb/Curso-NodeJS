// Importação dos módulos estruturais
var express = require('express');
var server = express();

// Inicia o consign
var consign = require('consign');

// Definição do EJS como módulo responsável por renderizar as views
server.set('view engine', 'ejs');
server.set('views', './app/views' );

// Injeção das rotas
consign().include('app/routes/').then('config/dbConnection.js').into(server); // Inserindo o módulo de BD (se colocar a pasta toda, ele entrará em loop...)

// Adiciona aos módulos
module.exports = server;
