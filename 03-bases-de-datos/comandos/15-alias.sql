-- establecer una alias a la coluimna de init_date para que se muestre como fecha de registro
SELECT name, last_name, init_date AS 'Fecha de registro'
FROM users;

-- podemos usar comillas dobles o simples para establecer el alias, pero es recomendable usar comillas simples para evitar confusiones con los nombres de las columnas
SELECT name, lastname AS "Apellido del cliente", init_date AS 'Fecha de registro'
FROM users;