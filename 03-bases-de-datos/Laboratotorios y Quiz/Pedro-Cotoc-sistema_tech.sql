--- 1. El Club de los Identificados (Relación 1:1)
SELECT users.name, users.lastname, dni.dni_number
FROM users
JOIN dni ON users.user_id = dni.user_id
ORDER BY users.lastname ASC;

---2. Directorio Empresarial (Relación 1:N)
SELECT users.name, companies.name AS empresa
FROM users

JOIN companies ON users.company_id = companies.id;
----3. Análisis de Inclusión Laboral (Relación 1:N con NULLs)
SELECT users.name, companies.name AS empresa
FROM users
LEFT JOIN companies ON users.company_id = companies.id;

---4. Inventario de Habilidades (Relación N:M)
SELECT users.name, lenguajes.name AS lenguaje
FROM users
JOIN users_lenguajes ON users.user_id = users_lenguajes.user_id
JOIN lenguajes ON users_lenguajes.lenguaje_id = lenguajes.lenguaje_id;

---5. Reporte de Popularidad de Lenguajes (N:M Avanzado)
SELECT lenguajes.name AS lenguaje, users.name AS usuario
FROM lenguajes
LEFT JOIN users_lenguajes ON lenguajes.lenguaje_id = users_lenguajes.lenguaje_id
LEFT JOIN users ON users_lenguajes.user_id = users.user_id;

---- 6. El Reporte Maestro (Múltiples Uniones)
SELECT 
    users.name, 
    users.lastname, 
    dni.dni_number, 
    companies.name AS empresa
FROM users
JOIN dni ON users.user_id = dni.user_id
JOIN companies ON users.company_id = companies.id;

--- Reto Extra 
SELECT productos.nombre, productos.precio
FROM productos
WHERE productos.precio > (SELECT AVG(precio) FROM productos)
ORDER BY productos.precio DESC;