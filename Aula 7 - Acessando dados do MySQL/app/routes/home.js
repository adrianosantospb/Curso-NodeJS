// Chama o módulo de BD
var db = require('../../config/db');

module.exports = function(server){
    server.get('/', function(req, res){
        // Chama a função de conexão
        var conexao = db();
        // Executa a consulta
        conexao.query('select * from noticias', function(error, result){
            res.render('home/home', {noticias : result}); // Desta forma, os resultados são repassados para a view
        });
    });
};