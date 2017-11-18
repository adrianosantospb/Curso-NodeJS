create database sistema_noticias;

use sistema_noticias;

create table noticias(
    id_noticia int not null primary key auto_increment,
    data_cadastro timestamp default current_timestamp,
    titulo varchar(100),
    texto text
);