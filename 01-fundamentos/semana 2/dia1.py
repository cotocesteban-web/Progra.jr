#usi de la division *//* y divisor del porcentaje *%*
# ejercicio

# 1 El Reparto de Galletas
# Tienes 143 galletas y quieres repartirlas en cajas donde caben exactamente 12 galletas.
# Reto: Calcula cuántas cajas completas llenarás y cuántas galletas sobrarán (sin usar decimales)


# solucion de la operacion:

# cantidad_galletas = 143
# espacio_galletas = 12
# cajas_completas = cantidad_galletas // espacio_galletas
# sobrante_galletas = cantidad_galletas % espacio_galletas
# print("%20s : %10d"%("cajas llenas:", cajas_completas))
# print("%20s : %10.2f "%("galletas sobreantes", sobrante_galletas))
# #en el seguno print los porcentaje son ára abreviar el string, flotantey entero en flotante se coloca el espcacion despues punto y 2 para decimales.

# 2 Conversor de Minutos
# Crea un programa que tome 375 minutos.
# Reto: Calcula cuántas horas completas son y cuántos minutos restantes quedan. (Ejemplo: 65 minutos = 1 hora y 5 minutos).

# minutos = 375
# horas = 60
# horas_completas = minutos // horas
# minutos_restantes = minutos % horas
# print("%20s : %5d"%("la cantidad de horas es: ", horas_completas))
# print("%20s : %10.2f"% ("los minutos restantes son: ", minutos_restantes))

# datos booleanos *or*, *true*, *not*:


#  ¿Es Par o Impar?
# Pide al usuario cualquier número entero.
# Reto: Usa el operador de residuo (%) para determinar si el número es par o impar. (Pista: si el residuo de dividir entre 2 es 0, es par). 

# l Validador de Pares
# En lugar de decidir con un if, simplemente imprime si la condición es verdadera o falsa.
# Reto: Crea una variable numero. Calcula si es par y guarda el resultado en una variable booleana.
# Pista: es_par = (numero % 2 == 0).

#  # print 1
# numero = int(input("ingrese un numero"))
# numero_par = (numero % 2 == 0)
# print(f"el numero {numero} es par: {numero_par}")

#print 2

# numero = int(input("ingrese un numero"))
# numero_par = (numero % 2 == 0)
# print("%20s : %10s" % ("el numero es par ? ", numero_par) )

# 2 Divisibilidad Doble (and)
# Queremos saber si un número es "especial". Un número es especial si es divisible entre 3 y también entre 5.
# Reto: Usa el número 15. Verifica si (numero % 3 == 0) and (numero % 5 == 0). Imprime el resultado.

# print 1
# numero = 15
# num_especial = (numero % 5 == 0) and (numero % 3 == 0)
# print(f"el numero {numero} es especial {num_especial}")

# print 2
# numero = 15
# numero_especial = (numero % 3 == 0) and (numero % 5 == 0)
# print(f"%20s  %20s"%("el numero es especial? ", numero_especial))

# Ejercicio 3: El Filtro de Invitados (or)
# Imagina que en una fiesta solo entran personas que traigan exactamente 10 galletas o exactamente 20. Si traen 15 (como en tu código anterior), no podrían entrar.
# Tu reto:
# Crea una variable mis_galletas.
# Crea una variable booleana puede_entrar que use el operador or.
# Imprime el resultado.

galletas = 20
puede_entrar = (galletas == 20) or  (galletas == 15)
no_entra = not puede_entrar
print(f"si puede entrar : , {puede_entrar}")
print(f"no puede entrar . {no_entra}")