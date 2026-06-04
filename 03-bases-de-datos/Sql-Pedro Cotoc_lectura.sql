--  ejercicio 1 Select el Observador
SELECT nombre FROM productos;
SELECT nombre, precio, stock FROM productos;
SELECT * FROM productos;
-- 2
SELECT DISTINCT categoria FROM productos;
SELECT DISTINCT proveedor_id FROM productos WHERE proveedor_id IS NOT NULL
SELECT DISTINCT precio FROM productos;
-- 3. FILTRANDO CON WHERE
-- ----------------------------------------------------------
-- Cosas de Hogar
SELECT * FROM productos WHERE categoria = 'Hogar';
-- El producto que vale 1200 exactos
SELECT * FROM productos WHERE precio = 1200.00;
-- Electrónica que tenga menos de 10 en stock
SELECT nombre FROM productos WHERE categoria = 'Electrónica' AND stock < 10;

-- ----------------------------------------------------------
-- 4. ORDENANDO CON ORDER BY
-- ----------------------------------------------------------
-- Por nombre de la A a la Z
SELECT * FROM productos ORDER BY nombre ASC;
-- Del más caro al más barato
SELECT * FROM productos ORDER BY precio DESC;
-- Por categoría y luego por stock de mayor a menor
SELECT * FROM productos ORDER BY categoria ASC, stock DESC;

-- ----------------------------------------------------------
-- 5. BUSCANDO PATRONES CON LIKE
-- ----------------------------------------------------------
-- Los que empiezan con Monitor
SELECT * FROM productos WHERE nombre LIKE 'Monitor%';
-- Los que terminan con la letra o
SELECT * FROM productos WHERE nombre LIKE '%o';
-- Los que son inalámbricos (en cualquier parte del nombre)
SELECT * FROM productos WHERE nombre LIKE '%Inalámbrico%' ORDER BY precio;

-- ----------------------------------------------------------
-- 6. OPERADORES LÓGICOS (AND, OR, NOT)
-- ----------------------------------------------------------
-- Electrónica barata (menos de 100)
SELECT * FROM productos WHERE categoria = 'Electrónica' AND precio < 100;
-- Que sean de Hogar o de Mobiliario
SELECT * FROM productos WHERE categoria = 'Hogar' OR categoria = 'Mobiliario';
-- Todo lo que NO sea electrónica y que sí tenga stock
SELECT * FROM productos WHERE NOT categoria = 'Electrónica' AND stock > 0 ORDER BY categoria;

-- ----------------------------------------------------------
-- 7. LIMITANDO RESULTADOS
-- ----------------------------------------------------------
-- Los primeros 2 de la lista
SELECT * FROM productos LIMIT 2;
-- El top 5 de los más caros
SELECT * FROM productos ORDER BY precio DESC LIMIT 5;
-- El que tiene menos stock (solo 1 resultado)
SELECT nombre FROM productos WHERE stock IS NOT NULL ORDER BY stock ASC LIMIT 1;

-- ----------------------------------------------------------
-- 8. TRABAJANDO CON VALORES NULOS
-- ----------------------------------------------------------
-- Productos sin proveedor asignado
SELECT * FROM productos WHERE proveedor_id IS NULL;
-- Donde el stock está vacío
SELECT * FROM productos WHERE stock IS NULL;
-- Tienen proveedor pero no les puse stock
SELECT * FROM productos WHERE proveedor_id IS NOT NULL AND stock IS NULL;

-- ----------------------------------------------------------
-- 9. CALCULANDO MÍNIMOS Y MÁXIMOS
-- ----------------------------------------------------------
-- El precio más bajo de todos
SELECT MIN(precio) FROM productos;
-- El más caro de Mobiliario
SELECT MAX(precio) FROM productos WHERE categoria = 'Mobiliario';
-- El stock más alto de los que valen menos de 500
SELECT MAX(stock) FROM productos WHERE precio < 500;

-- ----------------------------------------------------------
-- 10. CONTANDO REGISTROS
-- ----------------------------------------------------------
-- Total de productos
SELECT COUNT(*) FROM productos;
-- Cuántos sí tienen proveedor
SELECT COUNT(proveedor_id) FROM productos;
-- Electrónica de más de 100 pesos
SELECT COUNT(*) FROM productos WHERE categoria = 'Electrónica' AND precio > 100;

-- ----------------------------------------------------------
-- 11. SUMANDO VALORES
-- ----------------------------------------------------------
-- Total de artículos en la tienda
SELECT SUM(stock) FROM productos;
-- Cuánto dinero suman los productos de Mobiliario
SELECT SUM(precio) FROM productos WHERE categoria = 'Mobiliario';
-- El valor total del inventario (precio por cantidad)
SELECT SUM(precio * stock) FROM productos;

-- ----------------------------------------------------------
-- 12. SACANDO PROMEDIOS
-- ----------------------------------------------------------
-- Precio promedio general
SELECT AVG(precio) FROM productos;
-- Stock promedio en Electrónica
SELECT AVG(stock) FROM productos WHERE categoria = 'Electrónica';
-- Precio promedio de lo que entró este año (2024)
SELECT AVG(precio) FROM productos WHERE fecha_ingreso BETWEEN '2024-01-01' AND '2024-12-31';

-- ----------------------------------------------------------
-- 13. USANDO IN PARA LISTAS
-- ----------------------------------------------------------
-- Solo los IDs 1, 3 y 5
SELECT * FROM productos WHERE id IN (1, 3, 5);
-- Categorías específicas
SELECT * FROM productos WHERE categoria IN ('Hogar', 'Electrónica');
-- Productos de los proveedores 1 y 2 ordenados
SELECT * FROM productos WHERE proveedor_id IN (1, 2) ORDER BY nombre;

-- ----------------------------------------------------------
-- 14. DEFINIENDO RANGOS CON BETWEEN
-- ----------------------------------------------------------
-- Precios entre 50 y 300
SELECT * FROM productos WHERE precio BETWEEN 50 AND 300;
-- Entradas del primer trimestre
SELECT * FROM productos WHERE fecha_ingreso BETWEEN '2024-01-01' AND '2024-03-31';
-- Mobiliario con stock entre 5 y 20
SELECT * FROM productos WHERE stock BETWEEN 5 AND 20 AND categoria = 'Mobiliario';

-- ----------------------------------------------------------
-- 15. PONIENDO APODOS (ALIAS)
-- ----------------------------------------------------------
-- Cambiar nombre por Articulo
SELECT nombre AS Articulo FROM productos;
-- Cambiar precio por Costo_Unitario y ordenar
SELECT precio AS Costo_Unitario FROM productos ORDER BY Costo_Unitario;
-- Calcular el IVA y ponerle nombre a la columna
SELECT nombre, (precio * 0.13) AS Impuesto_Ventas FROM productos;

-- ----------------------------------------------------------
-- 16. CONCATENANDO TEXTOS
-- ----------------------------------------------------------
-- Unir nombre y categoría en una sola frase
SELECT CONCAT(nombre, ' - ', categoria) FROM productos;
-- Armar un mensaje de precio
SELECT CONCAT('El producto ', nombre, ' cuesta ', precio) FROM productos;
-- Inventar un código con ID y letras de la categoría
SELECT CONCAT(id, UPPER(LEFT(categoria, 2))) AS Codigo_Inventario FROM productos;

-- ----------------------------------------------------------
-- 17. AGRUPANDO DATOS (GROUP BY)
-- ----------------------------------------------------------
-- Ver categorías agrupadas
SELECT categoria FROM productos GROUP BY categoria;
-- Cuántos productos hay por cada categoría
SELECT categoria, COUNT(*) FROM productos GROUP BY categoria;
-- Precios min y max por proveedor
SELECT proveedor_id, MAX(precio), MIN(precio) FROM productos GROUP BY proveedor_id ORDER BY MAX(precio) DESC;
-- 18. FILTRANDO GRUPOS CON HAVING
-- Categorías con más de 2 productos
SELECT categoria FROM productos GROUP BY categoria HAVING COUNT(*) > 2;
-- Categorías donde el promedio de precio sea mayor a 200
SELECT categoria FROM productos GROUP BY categoria HAVING AVG(precio) > 200;
-- Proveedores con stock acumulado valioso
SELECT proveedor_id FROM productos WHERE stock > 0 GROUP BY proveedor_id HAVING COUNT(*) > 1 AND SUM(precio * stock) > 500;