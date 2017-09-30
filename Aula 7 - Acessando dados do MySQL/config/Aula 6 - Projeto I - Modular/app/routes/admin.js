module.exports = function(server){
    server.get('/admin', function(req, res){
        res.render('admin/form_add_noticia') // Página de aministração.
    });
};


