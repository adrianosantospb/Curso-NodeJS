module.exports = function(server){
    server.get('/', function(req, res){
        var connection = server.config.dbConnection(); // Faz a chamada aa variável que contem a função de abertura de conexão.
        
        // Instancia o modelo
        var noticiasModel =  server.app.models.noticiaModel;;

        noticiasModel.getNoticias(connection, function(error, result){
            res.render('home/home', {noticias : result}); // Desta forma, os resultados são repassados para a view
        });
    });
};