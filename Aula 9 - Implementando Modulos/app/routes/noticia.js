module.exports = function(server){
    server.get('/noticia', function(req, res){

        var connection = server.config.dbConnection(); // Abre sessão.
        var noticiaModel = server.app.models.noticiaModel; // Instancia o módulo.
        
        var id = res['id'];
        console.log(id);

        // Obtem notícia por ID
        noticiaModel.getNoticia(connection, id, function(error, result){
            res.render('noticia/noticia', {noticia : result}); // passando o resultado para a view
        });
    })
};