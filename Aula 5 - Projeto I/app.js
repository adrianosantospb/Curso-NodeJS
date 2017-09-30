/*
    Aula 5 - Primeiro projeto
    Por Adriano Santos

    Projeto de um sistema de notícia. 
    Neste projeto foi utilizado o NodeMon. Trata-se de um serviço que verifica a existência de mudanças no projeto e atualiza o serviço do NodeJS.

    Para fazer a chamada do serviço, agora, você deve executar o nodemon. Ex:
        * nodemon app.js
*/

// Instanciando os serviços do Express
var express = require('express');
var app = express();
var meu_modulo = require('./exemplo_modulo')(); // Forma de importa um módulo local. O () é para a execução da função.

// Define o EJS como responsável por renderizar as views
app.set('view engine', 'ejs');


// Direcionando as requisições.
app.get('/', function(req, res){
    res.render('home/index') // Página principal.
});

app.get('/admin', function(req, res){
    res.render('admin/form_add_noticia') // Página de aministração.
});

app.get('/noticias', function(req, res){
    res.render('noticias/noticias'); // Listagem das notícias.
});

app.get('/noticia', function(req, res){
    res.render('noticias/noticia'); // Detalhes de uma notícia.
});

// Habilita a escuta de requisições via browser.
app.listen(3000, function(){
    console.log('Serviço iniciado com sucesso!');
    console.log(meu_modulo); // Chamada o módulo de exemplo.
});