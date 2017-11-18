module.exports = function (server){
	server.get('/cadastro', function(req, res){
		server.app.controllers.admin.cadastra_noticia(server, req, res);
	});

	server.post('/noticias/salvar', function(req, res){
		server.app.controllers.admin.noticias_salvar(server, req, res);
	});
}