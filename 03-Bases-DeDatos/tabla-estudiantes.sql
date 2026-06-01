-- Tabla de las categorias
CREATE TABLE categorias (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Tabla: instructores
CREATE TABLE instructores (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE
);

-- Tabla: cursos
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

-- Tabla: estudiantes
CREATE TABLE estudiantes (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    edad INT,
    fecha_registro DATE
);

-- Tabla: inscripciones (N:M)
CREATE TABLE inscripciones (
    est_id INT,
    cur_id INT,
    fecha_inscripcion DATE,
    calificacion_final INT,
    PRIMARY KEY (est_id, cur_id),
    FOREIGN KEY (est_id) REFERENCES estudiantes(id) ON DELETE CASCADE,
    FOREIGN KEY (cur_id) REFERENCES cursos(id) ON DELETE CASCADE
);

-- Categorías
INSERT INTO categorias (nombre) VALUES ('Programación'), ('Bases de Datos'), ('Web');

-- Instructores
INSERT INTO instructores (nombre, apellido, correo) VALUES 
('Roberto', 'Sánchez', 'roberto.sanchez@gmail.com'),
('Elena', 'Villagrán', 'elena.v@gmail.com'),
('Mario', 'Estrada', 'mario.estrada88@gmail.com');

-- Cursos (Nombres directos)
INSERT INTO cursos (titulo, precio, fecha_lanzamiento, cat_id, ins_id) VALUES 
('Python', 150.00, '2026-01-10', 1, 1),
('MySQL', 200.00, '2026-01-15', 2, 2),
('C', 250.00, '2026-02-01', 1, 3),
('Java', 300.00, '2026-02-10', 1, 1),
('JavaScript', 175.00, '2026-02-20', 3, 2);

-- Estudiantes
INSERT INTO estudiantes (nombre, apellido, edad, fecha_registro) VALUES 
('Luis', 'García', 20, '2026-01-05'),
('Ana', 'Martínez', 23, '2026-01-06'),
('Pedro', 'Armas', 19, '2026-01-07'),
('Karla', 'Méndez', 25, '2026-01-08'),
('Jorge', 'López', 22, '2026-01-09'),
('Sofía', 'Ramos', 21, '2026-01-10'),
('Mateo', 'Díaz', 24, '2026-01-11'),
('Lucía', 'Cano', 27, '2026-01-12');

-- 12 Inscripciones (Repartidas para que Ana y otros tengan varios cursos)
INSERT INTO inscripciones (est_id, cur_id, fecha_inscripcion, calificacion_final) VALUES 
(1,1, '2026-03-01', 85), (1,4, '2026-03-02', 78),
(2,2, '2026-03-01', 90), (2,5, '2026-03-05', 88),
(3,3, '2026-03-10', 65), (4,1, '2026-03-12', 95),
(5,4, '2026-03-15', 40), (6,2, '2026-03-16', 82),
(7,5, '2026-03-18', 92), (8,3, '2026-03-20', 70),
(1,2, '2026-03-22', 80), (4,5, '2026-03-25', 100);

-- Qwerys
SELECT cur.titulo AS Curso, cat.nombre AS Categoria, 
       CONCAT(ins.nombre, ' ', ins.apellido) AS Instructor
FROM cursos cur
JOIN categorias cat ON cur.cat_id = cat.id
JOIN instructores ins ON cur.ins_id = ins.id;

SELECT cur.titulo AS Curso, est.nombre, est.apellido
FROM inscripciones inc
JOIN cursos cur ON inc.cur_id = cur.id
JOIN estudiantes est ON inc.est_id = est.id
WHERE cur.titulo = 'MySQL';

SELECT cur.titulo AS Curso, (cur.precio * COUNT(inc.est_id)) AS Ingresos_Totales
FROM cursos cur
JOIN inscripciones inc ON cur.id = inc.cur_id
GROUP BY cur.id, cur.titulo, cur.precio;

SELECT est.nombre AS Estudiante, AVG(inc.calificacion_final) AS Promedio
FROM estudiantes est
JOIN inscripciones inc ON est.id = inc.est_id
GROUP BY est.id, est.nombre
HAVING AVG(inc.calificacion_final) > 70;

SELECT cur.titulo AS Curso_Sin_Inscritos
FROM cursos cur
LEFT JOIN inscripciones inc ON cur.id = inc.cur_id
WHERE inc.cur_id IS NULL;


SELECT est.edad, COUNT(*) AS Cantidad_Estudiantes
FROM estudiantes est
GROUP BY est.edad
ORDER BY Cantidad_Estudiantes DESC;

