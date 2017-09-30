module.exports = function(server){
    server.get('/noticias', function(req, res){
        res.render('noticias/noticias'); // Listagem das notícias.
    });    
};    

