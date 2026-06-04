Create table persons (
    id,
    name,
    age,
    email,
    fecha_nacimiento
)

person 1
create table persons1 (
    id int,
    name varchar(100),
    age int,
    email varchar(50),
    fecha_nacimiento date
)

person 2
create table persons2(
    id int,
    name varchar(100)NOT NULL,
    age int,
    email varchar(50),
    fecha_nacimiento date
)

person 3
create table persons3(
    id int NOT NULL,
    name varchar(100) NOT NULL,
    age int,
    email varchar(50)
    fecha_nacimiento date
    Unique (id)
)
person4
create table persons4(
    id int NOT NULL,
    name varchar(100) nOT NULL,
    age int,
    email varchar(50) UNIQUE,
    fecha_nacimiento date,
    Unique (id)
    PRIMARY KEY (ID)
)

person5
create table persons5(
    id int NOT NULL,
    name varchar(100) nOT NULL,
    age int,
    email varchar(50),
    fecha_nacimiento date,
    Unique (id)
    PRIMARY KEY (ID)
    CHEK (AGE >=18)
)
person6
create table persons6(
    id int NOT NULL,
    name varchar(100) nOT NULL,
    age int,
    email varchar(50) DEFAULT 'invitado@gmail.com',
    fecha_nacimiento date,
    Unique (id)
    PRIMARY KEY (ID)
    CHEK (AGE >=18)
)

person7
create table persons7(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(100) nOT NULL,
    age int,
    email varchar(50) DEFAULT 'invitado@gmail.com',
    fecha_nacimiento date,
    Unique (id)
    PRIMARY KEY (ID)
    CHEK (AGE >=18)
)

INSERT INTO persons7(name, age, email, fecha_nacimiento) values ('Miguel' 30, 'miguel@gmail.com', '2026-01-01' )

insert into persons7  (name) values ()