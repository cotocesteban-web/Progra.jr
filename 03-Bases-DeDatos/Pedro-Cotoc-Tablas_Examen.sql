-- PARTE 1: CONSULTAS SQL
-- SE CREO UNA NUVA BASE DE DATOS CON (CREATE DATABASE).
CREATE DATABASE Tablas_del_Examen;

USE Tablas_del_Examen;

--1. CREACION DE TABLA DEPARTAMENTOS
CREATE TABLE departamentos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    presupuesto DECIMAL(12, 2) NOT NULL
);

--2. CREACION DE TABLA ENPLEADOS
CREATE TABLE empleados (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(100) NOT NULL,
    salario DECIMAL(12, 2) NOT NULL,
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departamentos(id) ON DELETE CASCADE
);


--3. CREACION DE LA TABLA PROYECTOS
CREATE TABLE proyectos (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    prioridad INT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT chk_prioridad CHECK (prioridad >= 1 AND prioridad <= 10)
);


--4. CREACION DE LA TABLA ASIGNACIONES.
CREATE TABLE asignaciones (
    empleado_id INT,
    proyecto_id INT,
    horas_dedicadas INT NOT NULL,
    PRIMARY KEY (empleado_id, proyecto_id),
    FOREIGN KEY (empleado_id) REFERENCES empleados(id) ON DELETE CASCADE,
    FOREIGN KEY (proyecto_id) REFERENCES proyectos(id) ON DELETE CASCADE
);

-- INSERCION DE DATOS
-- LOS DATOS A INSERTAR PAR ALA TABLA DEPARTAMENTOS
INSERT INTO departamentos (id, nombre, presupuesto) VALUES
(1, 'Ventas', 50000.00),
(2, 'Desarrollo', 120000.00),
(3, 'Soporte', 35000.00),
(4, 'RRHH', 45000.00);

-- DATOS A INSETAR A LA TABLA EMPLEADOS
INSERT INTO empleados (id, nombre, salario, dept_id) VALUES
(1, 'Ana Rojas', 3200.00, 1),
(2, 'Luis Pérez', 4500.00, 1),
(3, 'Diego Mora', 6000.00, 2),
(4, 'Elena Solís', 5500.00, 2),
(5, 'Mario Ruiz', 2500.00, 3),
(6, 'Lucía Castro', 2800.00, 3),
(7, 'Clara Soto', 3100.00, 4),
(8, 'Roberto Vaca', 1500.00, NULL);

-- DATOS PARA LA TABLA PROYECTOS.
INSERT INTO proyectos (id, nombre, prioridad) VALUES
(1, 'Expansión Norte', 8),
(2, 'Actualización Sistemas', 10),
(3, 'Campaña Verano', 5),
(4, 'Mantenimiento Red', 3);

-- DATOS PARA LA TABLA ASIGNACIONES
INSERT INTO asignaciones (empleado_id, proyecto_id, horas_dedicadas) VALUES
(1, 1, 20), 
(1, 2, 10), 
(2, 1, 40), 
(3, 3, 25), 
(4, 3, 30), 
(5, 4, 15), 
(6, 4, 20), 
(7, 2, 35); 

----- QWERYS TODAS LAS CONSULTAS SEGUN EL ENUNCIADO (PDF)

-- Relación y Filtro de Grupos
SELECT dep.nombre AS Departamento, AVG(emp.salario) AS Promedio_Salarial
FROM departamentos dep
JOIN empleados emp ON dep.id = emp.dept_id
GROUP BY dep.nombre
HAVING AVG(emp.salario) > 3500;

-- Clasificación de Salarios
SELECT emp.nombre, emp.salario,
    CASE 
        WHEN emp.salario > 5000 THEN 'Senior'
        WHEN emp.salario BETWEEN 3000 AND 5000 THEN 'Semi-Senior'
        ELSE 'Junior'
    END AS Rango
FROM empleados emp;

-- Empleados sin Asignaciones
SELECT emp.nombre
FROM empleados emp
LEFT JOIN asignaciones asi ON emp.id = asi.empleado_id
WHERE asi.proyecto_id IS NULL;

-- Bonus por Productividad
SELECT emp.nombre,
    CASE 
        WHEN SUM(asi.horas_dedicadas) > 50 THEN emp.salario * 0.10
        ELSE 0
    END AS Bono
FROM empleados emp
JOIN asignaciones asi ON emp.id = asi.empleado_id
GROUP BY emp.id, emp.nombre, emp.salario;

-- Departamentos con muchos empleados
SELECT dep.nombre AS Departamento, COUNT(emp.id) AS Cantidad_Empleados
FROM departamentos dep
JOIN empleados emp ON dep.id = emp.dept_id
GROUP BY dep.nombre
HAVING COUNT(emp.id) > 5;




-------------------------------------------------------------------
--            PARTE 2      

-- Tabla de las categorias
CREATE TABLE categorias (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);


-- CREACION DE LA TABLA INSTRUCTORES
CREATE TABLE instructores (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE
);

-- CRACION DE LA TABLA CURSOS
CREATE TABLE cursos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    fecha_lanzamiento DATE,
    cat_id INT,
    ins_id INT,
    FOREIGN KEY (cat_id) REFERENCES categorias(id),
    FOREIGN KEY (ins_id) REFERENCES instructores(id)
);



-- CREACION DE LA TABLA ESTUDIANTES
CREATE TABLE estudiantes (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    edad INT,
    fecha_registro DATE
);


-- CREACION DE LA TABLA INSCIPCIONES
CREATE TABLE inscripciones (
    est_id INT,
    cur_id INT,
    fecha_inscripcion DATE,
    calificacion_final INT,
    PRIMARY KEY (est_id, cur_id),
    FOREIGN KEY (est_id) REFERENCES estudiantes(id) ON DELETE CASCADE,
    FOREIGN KEY (cur_id) REFERENCES cursos(id) ON DELETE CASCADE
);


-- INSERCCION DE DATOS.

-- DATOS PARA LAS CATEGORIAS
INSERT INTO categorias (nombre) VALUES ('Programación'), ('Bases de Datos'), ('Web');

-- DATOS PARA LA TABLA INSTRUCTORES
INSERT INTO instructores (nombre, apellido, correo) VALUES 
('Roberto', 'Sánchez', 'roberto.sanchez@gmail.com'),
('Elena', 'Villagrán', 'elena.v@gmail.com'),
('Mario', 'Estrada', 'mario.estrada88@gmail.com');

-- DATOS PARA LA TABLA CURSOS
INSERT INTO cursos (titulo, precio, fecha_lanzamiento, cat_id, ins_id) VALUES 
('Python', 150.00, '2026-01-10', 1, 1),
('MySQL', 200.00, '2026-01-15', 2, 2),
('C', 250.00, '2026-02-01', 1, 3),
('Java', 300.00, '2026-02-10', 1, 1),
('JavaScript', 175.00, '2026-02-20', 3, 2);

-- DATOS PARA LA TABLA ESTUDIANTES
INSERT INTO estudiantes (nombre, apellido, edad, fecha_registro) VALUES 
('Luis', 'García', 20, '2026-01-05'),
('Ana', 'Martínez', 23, '2026-01-06'),
('Pedro', 'Armas', 19, '2026-01-07'),
('Karla', 'Méndez', 25, '2026-01-08'),
('Jorge', 'López', 22, '2026-01-09'),
('Sofía', 'Ramos', 21, '2026-01-10'),
('Mateo', 'Díaz', 24, '2026-01-11'),

-- DATOS DE LA TABLA INSCRIPCIONES
INSERT INTO inscripciones (est_id, cur_id, fecha_inscripcion, calificacion_final) VALUES 
(1,1, '2026-03-01', 85), (1,4, '2026-03-02', 78),
(2,2, '2026-03-01', 90), (2,5, '2026-03-05', 88),
(3,3, '2026-03-10', 65), (4,1, '2026-03-12', 95),
(5,4, '2026-03-15', 40), (6,2, '2026-03-16', 82),
(7,5, '2026-03-18', 92), (8,3, '2026-03-20', 70),
(1,2, '2026-03-22', 80), (4,5, '2026-03-25', 100);

-- QWERYS  Requerimientos de Consulta (Lectura y Joins)

-- 1. REPORTE DEL CATALOGO
SELECT cur.titulo AS Curso, cat.nombre AS Categoria, 
       CONCAT(ins.nombre, ' ', ins.apellido) AS Instructor
FROM cursos cur
JOIN categorias cat ON cur.cat_id = cat.id
JOIN instructores ins ON cur.ins_id = ins.id;

--2. ESTUDIANTES POR CURSO
SELECT cur.titulo AS Curso, est.nombre, est.apellido
FROM inscripciones inc
JOIN cursos cur ON inc.cur_id = cur.id
JOIN estudiantes est ON inc.est_id = est.id
WHERE cur.titulo = 'MySQL';

-- 3. CONTABILIDAD
SELECT cur.titulo AS Curso, (cur.precio * COUNT(inc.est_id)) AS Ingresos_Totales
FROM cursos cur
JOIN inscripciones inc ON cur.id = inc.cur_id
GROUP BY cur.id, cur.titulo, cur.precio;

-- RENDIMIENTO ACADEMICO
SELECT est.nombre AS Estudiante, AVG(inc.calificacion_final) AS Promedio
FROM estudiantes est
JOIN inscripciones inc ON est.id = inc.est_id
GROUP BY est.id, est.nombre
HAVING AVG(inc.calificacion_final) > 70;

-- CURSOS SIN ALUMNOS
SELECT cur.titulo AS Curso_Sin_Inscritos
FROM cursos cur
LEFT JOIN inscripciones inc ON cur.id = inc.cur_id
WHERE inc.cur_id IS NULL;

-- SEGMENTACION POR EDAD
SELECT est.edad, COUNT(*) AS Cantidad_Estudiantes
FROM estudiantes est
GROUP BY est.edad
ORDER BY Cantidad_Estudiantes DESC;