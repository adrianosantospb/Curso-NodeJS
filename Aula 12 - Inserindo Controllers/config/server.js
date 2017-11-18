/*
	Arquivo de configuração da App
*/

var express = require('express'); 
var consign = require('consign'); // Gerenciador de módulos
var bodyParser = require('body-parser'); // 
var expressValidator = require('express-validator'); // Validador

var server = express();
server.set('view engine', 'ejs'); // Define a tecnologia que será utilizada como view
server.set('views', './app/views'); // Define a pasta base das views

server.use(express.static("./app/public")); //Define diretório estático na app

server.use(bodyParser.urlencoded({
	extended: true
}));

server.use(expressValidator());

// Realiza os includes no servidor
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(server);

module.exports = server;