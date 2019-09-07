DROP DATABASE IF EXISTS reservation_DB;
CREATE DATABASE reservation_DB;

USE reservation_DB;

CREATE TABLE reservation
(
  id INT NOT NULL
  AUTO_INCREMENT,
  customer_name VARCHAR
  (100) NOT NULL,
  phone_num INTEGER
  (45) NOT NULL,
  email VARCHAR
  (50),
  PRIMARY KEY
  (id)
);
