create database playlistApp_db;

use playlistApp_db;

create table playlist (
	id int(10) auto_increment not null,
    title varchar(50),
    artist varchar(50),
    genre varchar(25),
    primary key (id)
    );
    

