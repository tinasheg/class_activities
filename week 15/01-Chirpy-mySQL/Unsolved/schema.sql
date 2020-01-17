CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  -- TABLE CODE TO GO HERE
  id integer not null auto_increment primary key,
  author varchar(25) not null,
  body varchar(160),
  created_at timestamp not null

);