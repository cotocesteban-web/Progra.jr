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


-- ==========================================================
-- LABORATORIO PROGRESIVO - PARTE 1
-- Estudiante: [Tu Nombre]
-- Universidad Regional de Guatemala
-- ==========================================================

-- 1. Reporte de Asistencia: Nombre del estudiante y curso inscrito.
SELECT estudiantes.nombre, cursos.nombre_curso
FROM estudiantes
JOIN inscripciones ON estudiantes.id = inscripciones.estudiante_id
JOIN cursos ON inscripciones.curso_id = cursos.id;

-- 2. Lista de Precios: Cursos con precio mayor a 110.00.
SELECT * FROM cursos 
WHERE precio > 110.00 
ORDER BY precio DESC;

-- 3. Conteo de Alumnos: Total de estudiantes inscritos.
SELECT COUNT(DISTINCT estudiante_id) AS total_estudiantes 
FROM inscripciones;

-- 4. Inversión por Estudiante: Total pagado por cada alumno.
SELECT estudiantes.nombre, SUM(cursos.precio) AS total_pagado
FROM estudiantes
JOIN inscripciones ON estudiantes.id = inscripciones.estudiante_id
JOIN cursos ON inscripciones.curso_id = cursos.id
GROUP BY estudiantes.nombre;

-- 5. Promedio por Curso: Promedio de notas por cada materia.
SELECT cursos.nombre_curso, AVG(inscripciones.nota) AS promedio_notas
FROM cursos
JOIN inscripciones ON cursos.id = inscripciones.curso_id
GROUP BY cursos.nombre_curso;

-- 6. Ranking de Notas: Estudiantes con nota entre 80 y 95.
SELECT estudiantes.nombre, inscripciones.nota
FROM estudiantes
JOIN inscripciones ON estudiantes.id = inscripciones.estudiante_id
WHERE inscripciones.nota BETWEEN 80 AND 95;

-- 7. Cursos más concurridos: Cantidad de alumnos por curso.
SELECT cursos.nombre_curso, COUNT(inscripciones.estudiante_id) AS cantidad_alumnos
FROM cursos
LEFT JOIN inscripciones ON cursos.id = inscripciones.curso_id
GROUP BY cursos.nombre_curso
ORDER BY cantidad_alumnos DESC;

-- 8. Excelencia Académica (HAVING): Promedio > 85 y más de 1 curso.
SELECT estudiantes.nombre, AVG(inscripciones.nota) AS promedio
FROM estudiantes
JOIN inscripciones ON estudiantes.id = inscripciones.estudiante_id
GROUP BY estudiantes.nombre
HAVING COUNT(inscripciones.curso_id) > 1 AND promedio > 85;

-- 9. Análisis de Rentabilidad: Cursos con ingresos > 200.00.
SELECT cursos.nombre_curso, SUM(cursos.precio) AS total_recaudado
FROM cursos
JOIN inscripciones ON cursos.id = inscripciones.curso_id
GROUP BY cursos.nombre_curso
HAVING total_recaudado > 200.00;

-- 10. Segmentación de Rendimiento (CASE): Aprobados y Reprobados.
SELECT 
    estudiantes.nombre, 
    cursos.nombre_curso, 
    CASE 
        WHEN inscripciones.nota >= 70 THEN 'Aprobado'
        ELSE 'Reprobado'
    END AS estado
FROM estudiantes
JOIN inscripciones ON estudiantes.id = inscripciones.estudiante_id
JOIN cursos ON inscripciones.curso_id = cursos.id
ORDER BY cursos.nombre_curso ASC, inscripciones.nota DESC;



SELECT nombre.estudiante, nombre.curso,
From Estudiantes
JOIN inscripciones ON estudiantes_id = inscripciones_id.curso_id
JOIN cursos = inscripciones.curso_id = curso_id: