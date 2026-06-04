Limita la cantidad de reusltados que quiero obtener de una consulta, es decir, me va a traer solo una cantidad determinada de resultados, aunque existan más resultados que cumplan con la condición de la consulta.

-- obtener las primers 3 filas de la tabla users
SELECT *
FROM users
LIMIT 3;

-- obtener las primeras 2 filas con el email distinto a diego@gmail.com
select * 
from users 
where NOT email = 'diego@gmail.com'
LIMIT 2;