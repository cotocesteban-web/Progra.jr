-- obetener todo los dato de los ususrios junto a su dni (lo teng ao no)


elft join:
-- evuelve todo los registros de la tabla users
--- y los regitros coicidentes de la tabla derecha
- si no hay conicidencia se rellenan con null

selct *
from user left join dni
on users.user_id = dni.user_dni
