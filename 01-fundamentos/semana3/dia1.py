### funcion es una funcion que la puedes reutilizarlo y no estar realizandola varias veces.
# 2. Con parámetro
# def saludo():
#     print("hola como estas?", nombre)

# nombre = input("ingrese su nombre: ")
# saludo()

#### suma con def:


# def suma(a,b):
#     resultado = a + b
#     return  resultado

# resultado = suma(7,8)
# print(resultado)

####Ñ

# def saludo():
#     saludo = "hola"
#     nombre = "esteban"
#     print(saludo, nombre)

# saludo()



# Proyecto_Apellido_Nombre.py
# Fundamentos de Programación

def categoria(promedio):
    if promedio <= 99:
        return "Insuficiente"
    elif promedio <= 299:
        return "Regular"
    elif promedio <= 599:
        return "Idoneo"
    else:
        return "Sobreproduccion"


def nombre_producto(codigo):
    if codigo == 1:
        return "Fertilizante"
    elif codigo == 2:
        return "Insecticida"
    elif codigo == 3:
        return "Herbicida"


def main():
    # Índices: 0=Fertilizante, 1=Insecticida, 2=Herbicida
    lotes = [0, 0, 0]
    unidades = [0, 0, 0]

    total_lotes = 0
    total_unidades = 0

    
    if total_lotes > 0:
        promedio_general = total_unidades / total_lotes
    else:
        promedio_general = 0

    while True:
        dato = input()

        if dato == "FIN":
            break

        # Validación
        if len(dato) != 5 or not dato.isdigit():
            print("dato invalido", dato)
            continue

        codigo = int(dato[0])
        cantidad = int(dato[1:4])
        entregado = dato[4]  # no se usa, pero viene en el dato

        if codigo < 1 or codigo > 3:
            print("dato invalido", dato)
            continue

        # Guardar datos
        indice = codigo - 1
        lotes[indice] += 1
        unidades[indice] += cantidad

        total_lotes += 1
        total_unidades += cantidad

    # Mostrar tabla
    print(f"{'Producto':15} {'Lotes':15} {'Total unidades':15} {'Prom. por lote':15} {'Categoria':15}")

    promedios = []

    for i in range(3):
        if lotes[i] > 0:
            promedio = unidades[i] / lotes[i]
        else:
            promedio = 0

        promedios.append(promedio)

        print(f"{nombre_producto(i+1):15} {lotes[i]:15} {unidades[i]:15} {promedio:15.2f} {categoria(promedio):15}")

    # Resumen
    max_unidades = max(unidades)
    max_lotes = max(lotes)

    prod_max_unidades = nombre_producto(unidades.index(max_unidades) + 1)
    prod_max_lotes = nombre_producto(lotes.index(max_lotes) + 1)

    print()
    print("Producto mayor cantidades:", prod_max_unidades)
    print("Producto con mas lotes:", prod_max_lotes)
    print(f"Promedio de productos producidos: {promedio_general:.2f}")

main()
