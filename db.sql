CREATE Table User (
  id int NOT NULL AUTO_INCREMENT,
  user varchar(100) NOT NULL,
);

CREATE Table Address (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  address varchar(255) NOT NULL,
  complement varchar(255),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES User(id)
);

-- --------------------------------------------------------
