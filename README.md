If you found this repo useful, consider clicking the sponsor button near the top :) Sponsoring via GitHub is as little as $1/month and if you do not use banks or credit cards, there are crypto links included :)<br /><br />
create database test;

CREATE TABLE test.testing
(
    id int(10) not null,
    pk varchar(64) not null,
    bal varchar(64)
);

use test;

ALTER TABLE testing CHANGE id id INT(10)AUTO_INCREMENT PRIMARY KEY;


