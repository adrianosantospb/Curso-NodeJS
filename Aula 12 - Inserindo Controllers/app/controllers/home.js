module.exports.index = function (server, req, res){

	// Abre uma conexão
	var conexao = server.config.dbConnection();
	// Instancia o DAO de notícia
	var noticiasModel = new server.app.models.NoticiasDAO(conexao);

	noticiasModel.ObtemAsCincoUltimasNoticias(function(error, result){
		res.render("home/index", {noticias : result});	
	});
}