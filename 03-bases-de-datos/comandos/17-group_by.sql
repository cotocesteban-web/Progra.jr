-- agrupo filas que tienen los mismos valores en una o más columnas, y luego puedo aplicar funciones de agregación a cada grupo para obtener resultados resumidos.

-- cuantas personas tienen la misma edad
SELECT age, COUNT(*) AS total_people
FROM users
GROUP BY age;


-- cuantos usuariso hay con el mismo nombre