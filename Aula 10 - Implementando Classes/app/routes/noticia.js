module.exports = function(server){
    server.get('/noticia', function(req, res){

        var connection = server.config.dbConnection(); // Abre sessão.
        var noticiaDAO = new server.app.models.NoticiasDAO(connection); // Instancia o módulo.
       
        var id = res['id'];
        console.log(id);

        // Obtem notícia por ID
        noticiaDAO.getNoticia(id, function(error, result){
            res.render('noticia/noticia', {noticia : result}); // passando o resultado para a view
        });
    })
};