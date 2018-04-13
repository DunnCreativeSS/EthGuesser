create database test;

CREATE TABLE test.testing
(
    id int(10) not null,
    pk varchar(64) not null,
    bal varchar(64)
);

ALTER TABLE testing CHANGE id id INT(10)AUTO_INCREMENT PRIMARY KEY;


