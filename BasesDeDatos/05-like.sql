--- compara pero solo texto
-- es un tipo de dato que contiene o se parece a
-- significa que le damos un criterio de busqueda ala consulta

SELECT *
FROM users 
WHERE email LIKE '%@gmail.com'


SELECT *
FROM users 
WHERE email LIKE 'd%'

--- ejercicio
--- Listar todos los apellidos distintos que existabn en la tablas ususrio
filtrar todas las edades distintas de la tabla con la edad igual a 22
SELECT DISTINCT lastname
FROM users;


--- Mostrar el nombre, apellido y edad de todos los usuaruis que tengan mas de 20 anios de forma decendene poR NOMBRE

SELECT name, lastname, age
FROM users
WHERE age > 20
ORDER BY name DESC;

-- el user_id y el name de aquelloos usuarios que tengan un correo de :@gmail.com"  y cuya fecha de inicio (init_date) sea posterior a 2022

SELECT id_name, name
FROM users
WHERE email LIKE '%@gmail.com'
AND init_date > '2022';