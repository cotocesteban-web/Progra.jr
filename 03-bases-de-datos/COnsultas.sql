SELECT nombre, proyecto_actual AS Nombre_del_Proyecto
FROM empleados_proyectos
WHERE departamento = 'IT'
AND salario > 3800
AND proyecto_actual IS NOT NULL
ORDER BY salario DESC;

SELECT departamento, AVG(horas_semanales) AS Promedio_Horas
FROM empleado_proyectos
GROUP BY departmento
HAVING AVG (horas_semanales) >30;
