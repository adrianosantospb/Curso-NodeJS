/* 
	Arquivo de configuração com o Banco de Dados 
	P.S: Foi utilizado o banco de dadso MySql
*/

var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '123456',
		database : 'sistema_noticias'
	});
}

module.exports = function () {
	return connMySQL;
}