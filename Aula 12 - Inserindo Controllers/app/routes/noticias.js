module.exports = function (server) {
	
	server.get('/noticias', function(req, res){
		server.app.controllers.noticias.noticias(server, req, res);		
	});

	server.get('/noticia', function(req, res){
		server.app.controllers.noticias.noticia(server, req, res);
	});
};