### el orden by sirve para ordenar ascendente o descendente
el valor por defento es ascendente

--ordenar por edad de forma ascendente
ordenar todos lo datos de la tabla de forma ascendente

SELECT *
FROM users
ORDER BY age;

-- DECENDENTE
SELECT *
FROM users
ORDER BY age DESC;

--- ORDENAR todod los datos de la tabla con el nombre igual a luis y ordenar por edad de forma decesndente
SELECT *
FROM users
WHERE name = "luis"
ORDER BY age DESC;

