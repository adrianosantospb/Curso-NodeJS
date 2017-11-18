module.exports.cadastra_noticia = function (server, req, res){
	res.render("admin/cadastro", {validacao : {}, noticia : {}});
}

module.exports.noticias_salvar = function (server, req, res){
	var noticia = req.body;

	req.assert('titulo','Título é obrigatório').notEmpty();
	req.assert('resumo','Resumo é obrigatório').notEmpty();
	req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
	req.assert('autor','Autor é obrigatório').notEmpty();
	req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
	req.assert('texto','Texto é obrigatório').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render("admin/cadastro", {validacao : erros, noticia : noticia});
		return;
	}

	var connection = server.config.dbConnection();
	var noticiasModel = new server.app.models.NoticiasDAO(connection);

	noticiasModel.salvarNoticia(noticia, function(error, result){
		res.redirect('/noticias');
	});	
}