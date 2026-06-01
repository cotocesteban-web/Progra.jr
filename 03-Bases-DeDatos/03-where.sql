-- where me permite acotar los resultados limitando ciual es el criterio de seleccion
--- que datos queremos
-- de que tabla
--  
SELECT * FROM users WHERE age > 20;



-- igual = 
-- diferente != o <>
-- mayor >
-- menor <
-- mayor o igual >=
-- menor o igual <=

-- solo nombre de la tabla de usuario con la edad = 25
SELECT name
FROM users
WHERE age >= 20
 
filtrar todas las edades distintas de la tabla con la edad igual a 22
SELECT DISTINCT user_id, age, name
FROM users
WHERE AGE == 22;

