/*
    Curso introdutório sobre NodeJS
    Por Adriano Santos

    Aula 1: Apresentando o conceito de requisição via browser com o NodeJS
*/

// Importando a biblioteca HTTP
var http = require("http");

// Criando um servidor
var server = http.createServer(
    function (req, res){
        // Obtem a requisição do browser
        var url = req.url;
        // Analisa a solicitação
        if (url == "/tecnologia"){
            res.end("Página de tecnologia.");     
        }
        if (url == "/noticias"){
            res.end("Página de notícias.");
        }
        res.end("Portal Geral.");
    }
);
// Criando uma porta para requisição NodeJS
server.listen("3000");

console.log("Servidor iniciado")