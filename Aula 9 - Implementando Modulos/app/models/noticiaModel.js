module.exports = function(){

    // Cria uma função getNoticias que recebe a conexão e retorna um resultado.
    this.getNoticias = function(connection, callback) {
        connection.query('select * from noticias', callback);  
    }

    // Cria função para detalhe de notícias.
    this.getNoticia = function(connection, id, callback){
        connection.query('select * from noticias where id_noticia =' + id, callback);
    }
    
    /**
     * O MySQL tem uma funcionalidade (incluindo o próprio modulo do MySql utilizado aqui) que
     * faz a inserção dos dados por reflexão. Em outras palavras, ele recebe o JSON e faz as inserções
     * dos dados na tabela.
     */
    this.salvarNoticia = function(noticia, connection, callback){
        connection.query('insert into noticias set ?',noticia, callback);
    }


    return this;
}