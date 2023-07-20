create table user (
  id INT(11) unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(150) NOT NULL,
  lastname VARCHAR(150) NOT NULL,
  username VARCHAR(80) NOT NULL UNIQUE,
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
),
(
"firstname": "Jérémy",
"lastname": "Collin",
"username": "xGnTK",
"password": "$argon2id$v=19$m=65536,t=5,p=1$5VBoxcm17FVkmZinP0XwNw$jpHI6IiGbHVM8oVtnGP5jzaXYHsw+c0pPfO+B09tRx0",
"mail": "Jeremy@gmail.com", true
),
("firstname": "Giselle",
"lastname": "Brezan",
"username": "BreGan",
"password": "$argon2id$v=19$m=65536,t=5,p=1$hSNStAFQ8s2FYrkdIErywg$gxtVSM1WzgUE5K2IR6xvC9v42/FxiPLDpsJpD2xRlGM",
"mail": "Bregan@gmail.com",
),
(
"firstname": "Bertrand",
"lastname": "Briez",
"username": "BertrandDu92",
"password": "$argon2id$v=19$m=65536,t=5,p=1$EfK8Oh/A7GoSqM2tPRpfyQ$cTBfvTN1n88CbsmMrCz6pckPNrBiZApo2RhZZ8AnpgI",
"mail": "BertrandGeek@hotmail.com",
),
(
  "firstname": "Maria",
"lastname": "Lemar",
"username": "Chatonn",
"password": "$argon2id$v=19$m=65536,t=5,p=1$JtErgxwX8Dese2gEOkApiw$3VbAetSoVjv8fY9oItm410SZXEQtUHUc1ISju7knB14",
"mail": "Maria@outlook.com",
),
(
  "firstname": "Lola",
"lastname": "Ledgo",
"username": "e__girl",
"password": "$argon2id$v=19$m=65536,t=5,p=1$UJiYHdkMUMvN4B0KiqxaLg$nH9C+Ght3D9CW9gdp5mnndvuyM4An418BaLpRceqTcg",
"mail": "LolaEgirl@live.fr",
);
