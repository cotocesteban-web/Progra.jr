
-- seleccionar todos los registros de la tabla users donde la edad sea 25, 30 o 35
SELECT * 
FROM users 
WHERE age IN (25, 30, 35);

-- seleccionar todos los registros de la tabla users donde la edad no sea 22, 30 o 23
SELECT * 
FROM users 
WHERE age NOT IN (22, 30, 23);

-- seleccionar todos los registros donde la edad sea 22, 30, 23 y 19 Y el email sea no nulo
SELECT * 
FROM users 
WHERE age IN (22, 30, 23) AND email IS NOT NULL;