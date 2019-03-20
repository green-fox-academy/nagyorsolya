 CREATE DATABASE drax;
 
 USE drax;

 CREATE TABLE food (
    name VARCHAR(30) NULL,
    amount INT NULL,
    calories INT NULL,
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT);

 INSERT INTO food (name, amount, calories) VALUES ('liver', 4, 2000), ('kidney', 3, 1000), ('heart', 1, 500);