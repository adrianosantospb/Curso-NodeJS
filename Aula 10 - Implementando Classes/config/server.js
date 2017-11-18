// Importação dos módulos estruturais
var express = require('express');
var server = express();

// Inicia o consign
var consign = require('consign');

// Importa o Body-Parser
var bodyParser = require('body-parser');

// Definição do EJS como módulo responsável por renderizar as views
server.set('view engine', 'ejs');
server.set('views', './app/views' );

//Parametrizando o Bode-Parser no Express (por se um middleware, ele deve ficar antes dos includes)
server.use(bodyParser.urlencoded( {extended:true})); //Permite que sejam implementadas por meio do JSON.


// Injeção das rotas
consign().include('app/routes/').
then('config/dbConnection.js').
then('app/models/').
into(server); // Inserindo o módulo de BD (se colocar a pasta toda, ele entrará em loop...)

// Adiciona aos módulos
module.exports = server;
