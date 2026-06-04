-- acotar los resultados, limitando cual es el criterio de selección

    -- que dtos queremos 
    -- de qué tabla
    -- bajo qué condiciones

SELECT * FROM users WHERE age > 30;

SELECT * 
FROM users 
WHERE age > 30;

-- igual =
-- diferente != o <>
-- mayor >
-- menor <
-- mayor o igual >=
-- menor o igual <=

-- solo nombre de la tabla de usuario con la edad igual a 25
SELECT name 
FROM users 
WHERE age >= 20;

-- filtrar todas las edades distintas de la tabla con edad igual a 22
-- filtrar todas las edades distintas de la tabla con edad igual a 22
SELECT distinct name, user_id, age
FROM users 
WHERE age = 22;

