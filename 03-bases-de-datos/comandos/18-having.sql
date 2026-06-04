-- se parece al where 
-- se usa para filtrar los resultados de una consulta después de haber agrupado los datos con group by
-- where filtra las filas ANTES de agrupar los datos, mientras que 
-- having filtra los grupos DESPUES de haber agrupado los datos

-- el having casi siempre va con funciones de agrupación, como count, sum, avg, min, max, etc.

-- obtener las edades que tienen más de 2 personas con esa edad
SELECT age, COUNT(*) AS total_people
FROM users
GROUP BY age
HAVING COUNT(*) > 2;

-- ver si hay más de 5 personas en total 
SELECT COUNT(*) AS total_people
FROM users
HAVING COUNT(*) > 5;


-- mostrar los que tiene id mayor a 5 y que tengan más de 2 personas con esa edad
SELECT age, COUNT(*) AS total_people
FROM users
WHERE id > 5
GROUP BY age
HAVING COUNT(*) > 2;