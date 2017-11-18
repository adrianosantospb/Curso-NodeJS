module.exports = function (server){

	server.get('/', function(req, res){
		server.app.controllers.home.index(server, req, res);
	});
}