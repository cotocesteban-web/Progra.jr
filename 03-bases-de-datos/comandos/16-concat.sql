-- concatener en una sola columna el nombre y el apellido de los usuarios
SELECT CONCAT ('Nombre: ', name, ' Apellido: ', last_name) AS full_name
FROM users;

SELECT CONCAT (name, ' ', lastname) AS 'Nombre completo'
FROM users;

SELECT CONCAT ('Nombre: ', name) AS Nombre, CONCAT('Apellido: ', lastname) as Apellido
FROM users;