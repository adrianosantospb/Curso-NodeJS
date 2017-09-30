// Instanciando os serviços do Express
var express = require('express');
var app = express();

// Define o EJS como responsável por renderizar as views
app.set('view engine', 'ejs');
app.set('views', './app/views'); // Configurando a pasta raíz para as views. Toma como base o módulo que vai chamar este.

// Disponibiliza o módulo
module.exports = app;