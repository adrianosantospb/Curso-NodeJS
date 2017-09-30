/*
    Curso introdutório sobre NodeJS
    Por Adriano Santos

Aula 3 - Refatorando o primeiro exemplo desenvolvido neste curso com o uso do ExpressJS
*/

// Instanciando o módulo http
var http = require("http");

// Criando um servidor
var servidor = http.createServer(
    function(req, res){
        var url = req.url;

        if (url == "/noticias"){
            res.end("Página de notícias.")
        };
        if (url == "/tecnologias"){
            res.end("Página de tecnologias.")
        };
        res.end("Página inicial");
    }
).listen("3000");

console.log("Serviço iniciado.")
