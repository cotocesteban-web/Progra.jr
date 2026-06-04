-- cuenta cuantas filas contiene la tabla users
SELECT COUNT(*) AS total_users
FROM users;

-- cuenta cuantas filas contiene la tabla users con el email nulo
SELECT COUNT(*) AS total_users_with_null_email
FROM users
WHERE email IS NULL;

-- cuantas filas contiene un dato no nulo en el campo de edad
SELECT COUNT(*) AS total_users_with_age
FROM users
WHERE age IS NOT NULL;

-- o

SELECT COUNT(age) AS total_users_with_age
FROM users

