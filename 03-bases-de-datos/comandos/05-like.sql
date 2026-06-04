-- like
-- significa que le damos un criterio de búsqueda a la consulta, y nos va a traer los resultados que cumplan con ese criterio
-- --  es un tipo de: 
--     contiene
--     se parece a
--     empieza por
--     termina por

SELECT *
FROM users
WHERE email LIKE '%@gmail.com';

Select *
FROM users
WHERE email LIKE 'd%';



-- 