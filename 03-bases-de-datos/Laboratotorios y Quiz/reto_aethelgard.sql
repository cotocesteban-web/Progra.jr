-- 1.
--- creamos la base de datos con su nombre:
CREATE DATABASE estacion_aethelgard;
-- 2.
---- Indica que el sistema va a trabajar sobre esta base de datos
USE estacion_aethelgard;
--3.
--- Crear la tabla con todas las columnas:

-- 4,
--- Crear la tabla con todas sus columnas:
CREATE TABLE flota(
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    clase VARCHAR(50),
    energia INT,
    escudo INT,
)

-- 5.
--- Colocar lo datos dentro de las columnas:
INSERT INTO flota(id, nombre, clase, energia, escudo)VALUES
(1, 'Centinela-X', 'Combate', 100, 100),
(2, 'Carguero-01', 'Carga', 80, 100),
(3, 'Titan-Alpha', 'Hibrida', 90,50);

-- 6.
--- Modificar la energia bajarla
UPDATE flota SET enerfia = 45 WHERE nombre = 'Centinela-X';

-- 7.
--- Subir escudo
UPDATE flota SET escudo = 100 WHERE nombre = 'Titan-Alpha';

-- 8. 
--- Baja de servicio
DELETE FROM flota WHERE nombre = 'Carguero-01',
 
--- 9.
--- Verificacion
SELECT * FROM flota;
