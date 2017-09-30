// Instancia o ExpressJS
var express = require("express");
// Criando a execução do express
var app = express();

// Analisando as rotas
app.get('/', 
    function(req, res){
        res.send("Página principal");
    }
); // Para página princial

app.get('/tecnologia', 
    function(req, res){
        res.send("Página de tecnologia");
    }
);// Para uma página de tecnologia.

// Instanciando o serviço
app.listen(3000,
    function(){
        console.log("Servidor iniciado com ExpressJS");
    }
);




