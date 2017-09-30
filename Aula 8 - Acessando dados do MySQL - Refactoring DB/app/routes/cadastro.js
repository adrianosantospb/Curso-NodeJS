module.exports = function(server){
    server.get('/cadastro', function(req, res){
        res.render('cadastro/cadastro');
    });
};