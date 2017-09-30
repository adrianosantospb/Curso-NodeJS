var express = require('express');

var app = express();
app.set('view engine', 'ejs');


app.get('/tecnologia', function(req, res){
    res.render('secao/tecnologia');
});

app.get('/', function(req, res){
    res.send('Funcionou a primeira parte.');
}); 

app.listen(3000, function(){
    console.log('Servidor iniciado com sucesso.');
});