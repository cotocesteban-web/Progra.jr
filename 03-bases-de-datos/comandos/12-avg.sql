-- promedio 
SELECT AVG(age) AS average_age
FROM users;

-- valores mixtos
SELECT AVG(age) AS average_age, sum(age) as suma, count(age)
FROM users;