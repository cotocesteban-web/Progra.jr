-- NULL

-- todo los usuarios con el correo nulo
SELECT *
FROM users
WHERE email IS NULL;

-- todo los usuarios con el correo no nulo
SELECT *
FROM users
WHERE email IS NOT NULL;

-- ifnull
-- es una función que me va a permitir reemplazar el valor nulo por otro valor que yo le indique
-- obtener el nombre, apellido y edad de la tabla users y si la edad es nula, reemplazarla por 0
SELECT name, last_name, IFNULL(age, 0) AS age
FROM users;