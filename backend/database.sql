create table user (
  id INT(11) unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(150) NOT NULL,
  lastname VARCHAR(150) NOT NULL,
  username VARCHAR(80) NOT NULL UNIQUE,
  image VARCHAR(200) NULL,
  password VARCHAR(255) NOT NULL,
  mail VARCHAR(40) NOT NULL UNIQUE,
  is_admin BOOLEAN DEFAULT FALSE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO user (firstname, lastname, username, password, mail, is_admin) VALUES (
  'Celia',
  'Kleczynski',
  'KDestraz',
  "$argon2id$v=19$m=65536,t=5,p=1$LiOUxKuxGlqllBS/orpihg$ztzttCi1WClTHAGgKSZF9xYa579t7gf2P3aqHP1NJZ0",
  "KD@gmail.com", true
);
