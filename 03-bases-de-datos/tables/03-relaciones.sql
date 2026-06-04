--- relacion 1:1 donde un usuario se relaciona con un solo DNI

CREATE TABLE dni (
    dni_id INT AUTO_INCREMENT,
    dni_number int not null,
    user_id INT,
    PRIMARY KEY (dni_idd),
    FOREIGN KEY (user_id) REFERENCES users(user_id);
)


--- Relacion uno a muchos
CREATE TABLE companies (
    company_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (100) NOT NULL,

)

--MODIFICAR TABLE
AFTER table users
add company_id int:

---convertir a foreign key
after table users
add constraint fk_conpanies 
foreign key (company_id) references companies(company_id);

--- relacion q a muchos
CREATE TABLE lenguajes(
    leng
)