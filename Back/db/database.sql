CREATE DATABASE IF NOT EXISTS desafioapp;

USE desafioapp;

/*este yo no lo pondria pero nose si es super necesario para otra cosa */
CREATE TABLE tipoDoc(
 idtipoDoc INT(1) NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(30) NOT NULL,
 PRIMARY KEY (idtipoDoc)
) engine = InnoDB;

CREATE TABLE lugares(
 idLugar INT(2) NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(30) NOT NULL,
 calle VARCHAR(30),
 nro INT(4),
 barrio VARCHAR(20),
 PRIMARY KEY (idLugar)
) engine = InnoDB;

CREATE TABLE tipoEventos(
 idTipoEvento INT(2) NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(30) NOT NULL,
 PRIMARY KEY (idTipoEvento)
) engine = InnoDB;


CREATE TABLE participantes(
 idParticipante INT(7) NOT NULL AUTO_INCREMENT ,
 idtipoDoc INT(1), 
 nroDoc INT(9),
 nombre VARCHAR(30),
 apellido VARCHAR(30),
 fechaNac DATE,
 nroCel INT(15),
 nroCelEmergencia INT(15),
 mail VARCHAR(30),
  PRIMARY KEY (idParticipante),
  FOREIGN KEY (idtipoDoc) REFERENCES tipoDoc(idtipoDoc)
) engine = InnoDB;

/*CREATE TABLE edades(
 idEdad INT(1) NOT NULL AUTO_INCREMENT,
 edad VARCHAR(30) NOT NULL,
 PRIMARY KEY (idEdad)
) engine = InnoDB;*/


/*como yo lo haria al form*/
/*
CREATE TABLE participantes(
 idParticipante INT(7) NOT NULL AUTO_INCREMENT ,
 nombre VARCHAR(30),
 apellido VARCHAR(30),
 edad INT(2),
 nroDoc INT(9),
 fechaNac DATE,
 nroCel INT(15),
 mail VARCHAR(30),
 nroCelEmergencia INT(15),
 nombreTutor VARCHAR(15)
  PRIMARY KEY (idParticipante, nroDoc),
  FOREIGN KEY (idEdad) REFERENCES edades(idEdad)
) engine = InnoDB;
*/

CREATE TABLE eventos(
 idEvento INT(2) NOT NULL AUTO_INCREMENT,
 idTipoEvento INT(2),
 idLugar INT(2),
 nombre VARCHAR(30) NOT NULL,
 fecha DATE,
 hora VARCHAR(5),
 cupo INT (3),
 nombreDisertante VARCHAR(30),
 FOREIGN KEY (idTipoEvento) REFERENCES tipoEventos(idTipoEvento),
 FOREIGN KEY (idLugar) REFERENCES lugares(idLugar),
 PRIMARY KEY (idEvento)
) engine = InnoDB;

CREATE TABLE inscripciones(
	id INT(11) NOT NULL AUTO_INCREMENT,
	idParticipante INT(7),
  idEvento INT(2),
	fechaInscripcion DATE,
  asistio VARCHAR(2),
  autorizacion VARCHAR(2),
  FOREIGN KEY (idParticipante) REFERENCES participantes(idParticipante),
  FOREIGN KEY (idEvento) REFERENCES eventos(idEvento),
  PRIMARY KEY(id)
) engine = InnoDB;

DESCRIBE tipoDoc;
DESCRIBE lugares;
DESCRIBE tipoEventos;
DESCRIBE participantes;
DESCRIBE eventos;
DESCRIBE inscripciones;
/*DESCRIBE edades;*/

 INSERT INTO tipoDoc values 
  (1, 'DNI'),
  (2, 'CE'),
  (3, 'DUI');

INSERT INTO lugares values 
  (1, 'Plaza de la mùsica', 'Avenida', 255, 'Barrio 1'),
  (2, 'Colegio', 'Calle', 1255, 'Barrio 2'),
  (3, 'Auditorio', 'Boulevard', 255, 'Barrio 3');

INSERT INTO tipoEventos values 
  (1, 'Taller'),
  (2, 'Charla'),
  (3, 'Capacitaciòn');

  /*INSERT INTO edades values 
  (1, '15'),
  (2, '16'),
  (3, '17');
  (4, '18');
  (5, '+');*/
  
   INSERT INTO participantes values 
  (1, 1, 45985331, 'Valeria', 'Fritelli', '2002/06/12', 583561, 541524, 'correo@dominio.com'),
  (2, 1, 46598532, 'Margarita', 'Pèrez', '2002/01/09', 583561, 541524, 'correo@dominio.com'),
  (3, 1, 47985333, 'Oriana', 'Fritelli', '2002/02/25', 583561, 541524, 'correo@dominio.com');
  
   INSERT INTO eventos values 
  (1, 1, 2, 'Taller XY', '2019/10/25','18:00',15, 'Juan Pèrez'),
  (2, 3, 1, 'Taller II', '2019/10/25','18:00',15, 'Juan Pèrez'),
  (3, 1, 1, 'Taller Y', '2019/11/02','18:00',15, 'Juan Pèrez');
  
  
 INSERT INTO inscripciones values 
  (1, 1, 1, '2019/09/19','SI','SI'),
  (2, 2, 2, '2019/09/19','SI','SI'),
  (3, 3, 2, '2019/09/19','SI','SI');
  
 
select * from inscripciones; 
select * from lugares; 
select * from tipoDoc; 
select * from participantes;
/*select * from edades;*/
