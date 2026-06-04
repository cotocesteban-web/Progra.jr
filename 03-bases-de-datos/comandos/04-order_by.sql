-- order by
-- capacidad de order ascendentemente(defecto) o descendentemente

-- ordenar todos los datos de la tabla por edad de forma ascendente
SELECT * 
FROM users 
ORDER BY age;

-- ordenar todos los datos de la tabla por edad de forma ascendente, explicitamente
SELECT * 
FROM users 
ORDER BY age ASC;

-- ordenar todos los datos de la tabla por edad de forma descendente
SELECT * 
FROM users 
ORDER BY age DESC;

-- ordenar todos los datos de la tabla, con el nombre igual a Luis y ordenarlos por edad de forma descendente 
SELECT *
FROM users
WHERE name = 'Luis'
ORDER BY age DESC