module.exports.noticias = function(server, req, res){
	var connection = server.config.dbConnection();
	var noticiasModel = new server.app.models.NoticiasDAO(connection);

	noticiasModel.getNoticias(function(error, result){
		res.render("noticias/noticias", {noticias : result});
	});	
};

module.exports.noticia = function (server, req, res){
	var connection = server.config.dbConnection();
	var noticiasModel = new server.app.models.NoticiasDAO(connection);

	// Captura o parâmetro id do get 
	var id = req.query["id"];

	noticiasModel.getNoticia(id, function(error, result){
		if (error == null){
			res.render("noticias/noticia", {noticia : result});
		}
	});	
};