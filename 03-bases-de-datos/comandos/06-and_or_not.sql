-- NOT 
-- AND 
-- OR 


select * 
from users 
where NOT email = 'diego@gmail.com'

-- todos los usuarios con email distinto a diego@gmail.com y que tengan edad igual a 15
select * 
from users 
where NOT email = 'diego@gmail.com' AND age = 15

-- todos los usuarios con email distinto a diego@gmail.com o que tengan edad igual a 15
select * 
from users 
where NOT email = 'diego@gmail.com' OR age = 15