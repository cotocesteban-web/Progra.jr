# ### Creacion de la funcion del codigo ###
# def linea_produccion():
#     lotes = [0, 0, 0]
#     unidades = [0]
#     total_lotes = 0
#     total_unidades = 0

# def productos_agroindustriales():
#     if num_lote == 1:
#         return "Fertilizante"
#     if num_lote == 2:
#         return "Insecticida"
#     if num_lote == 3:
#         return "Herbicida"
    
#     while True:
#         codigo_ingresado = input("Por favor ingrese el codigo de produccion: ")                          

#         if codigo_ingresado.lower() == "fin":
#             break

#         if len(codigo_ingresado) != 5:
#             print("Dato invalido debe tener unicamente 5 dígitos numericos:", codigo_ingresado)
#             continue
    
#         numeros = "0123456789"
#         for caracter in codigo_ingresado:
#             if caracter not in numeros: 
#                 print("dato invalido (solo números):", codigo_ingresado)
#                 break

#         num_lote = int(codigo_ingresado[0])
#         cantidad_lote = int(codigo_ingresado[1:3])
#         lote_entregado = int(codigo_ingresado[4])


#         if num_lote < 1 or num_lote > 3:
#             print(f"dato invalido (codigo debe ser 1, 2 o 3): {codigo_ingresado}")
#             continue
#         elif lote_entregado < 0 or lote_entregado > 1:
#             print(f"Dato invalido: {codigo_ingresado}")

#         indice = codigo_ingresado - 1
#         lotes[indice] = lotes[indice] + 1
#         unidades[indice] = unidades[indice] + cantidad_lote
#         total_lotes = total_lotes + 1
#         total_unidades = total_unidades + cantidad

#     if total_lotes > 0:
#         promedio_total_produccion = total_unidades / total_lotes

#     # Buscamos los mayores
#     maximo_unidades = unidades[0]
#     posicion_unidades = 0
#     maximo_lotes = lotes[0]
#     posicion_lotes = 0

#     for i in range(1, 3):
#         if unidades[i] > maximo_unidades:
#             maximo_unidades = unidades[i]
#             posicion_unidades = i 
        
     

# linea_produccion

# def productos_agroindustriales(num_lote):
#     if num_lote == 1:
#         return "Fertilizante"
#     elif num_lote == 2:
#         return "Insecticida"
#     elif num_lote == 3:
#         return "Herbicida"
#     else:
#         return "Desconocido"
    
# def clasificacion_de_promedios():
#     if promedio <= 99:
#         return "Insuficiente"
#     elif promedio <= 299:
#         return "Regular"
#     elif promedio <= 599:
#         return "Idoneo"
#     else:
#         return "Sobreproduccion"
    
    
# def linea_produccion():
#     total_lotes = 0
#     total_unidades = 0
#     lotes = [0, 0, 0]
#     cantidad_unidades = [0, 0, 0]
#     lote_entregado = 0
#     lote_no_entregado = 0
   

#     while True:
#         codigo_ingresado = input("Ingrese el código de producción (o 'fin'): ")

#         if codigo_ingresado.lower() == "fin":
#             break

#         if len(codigo_ingresado) != 5:
#             print("Dato invalido, debe tener 5 dígitos numéricos:", codigo_ingresado)
#             continue

#         # Ejemplo: primer dígito = tipo de lote
#         num_lote = int(codigo_ingresado[0])

#         if num_lote not in [1, 2, 3]:
#             print("Lote inválido")
#             continue

#         ultimo_digito = int(codigo_ingresado[-1])

#         if ultimo_digito not in [0, 1]:
#             print("Ultimo dígito inválido (debe ser 0 o 1)")
#             continue
#         if ultimo_digito == 1:
#          lote_entregado += 1
#         else:
#            lote_no_entregado += 1

#         cantidad_producto = int(codigo_ingresado[1:4])
#         indice_lote = num_lote - 1
#         cantidad_unidades[indice_lote] += cantidad_producto

#         total_lotes += 1
#         total_unidades += cantidad_producto
    
#         lotes[num_lote - 1] += 1

#     ## Calculamos el Promedio por cada producto
#         if num_lote != 0:
#             promedio_por_lote = cantidad_producto / total_lotes
#         else:
#             promedio_por_lote = 0
        
#         promedio_producto_producido = promedio_por_lote / total_lotes
        
         

        
def productos_agroindustriales(num_lote):
    if num_lote == 1:
        return "Fertilizante"
    elif num_lote == 2:
        return "Insecticida"
    elif num_lote == 3:
        return "Herbicida"
    else:
        return "Desconocido"
    

def linea_produccion():
    total_lotes = 0
    total_unidades = 0
    lotes = [0, 0, 0]
    cantidad_unidades = [0, 0, 0]
   

    while True:
        codigo_ingresado = input("Ingrese el código de producción (o 'fin'): ")

        if codigo_ingresado.lower() == "fin":
            break

        if len(codigo_ingresado) != 5:
            print("Dato invalido:", codigo_ingresado)
            continue

        num_lote = int(codigo_ingresado[0])

        if num_lote not in [1, 2, 3]:
            print("Lote inválido")
            continue

        ultimo_digito = int(codigo_ingresado[-1])

        if ultimo_digito not in [0, 1]:
            print("Ultimo dígito inválido")
            continue


        cantidad_producto = int(codigo_ingresado[1:4])

        indice_lote = num_lote - 1

        cantidad_unidades[indice_lote] += cantidad_producto

        total_lotes += 1
        total_unidades += cantidad_producto

        lotes[indice_lote] += 1
    print()
    print(f"{'Producto':<15} {'Lotes':<15} {'Total unidades':<15} {'Prom. por lote':<15} {'Categoria':<15}")

    # ========= TABLA =========
    promedio_por_producto = []
    for i in range(3):

        if lotes[i] == 0:
            promedio_lote = 0
        else:
            promedio_lote = cantidad_unidades[i] / lotes[i]

        if promedio_lote <= 99:
            categoria = "Insuficiente"
        elif promedio_lote <= 299:
            categoria = "Regular"
        elif promedio_lote <= 599:
            categoria = "Idoneo"
        else:
            categoria = "Sobreproduccion"
        producto = productos_agroindustriales(i+1)
        print(f"{producto:<15} {lotes[i]:15d} {cantidad_unidades[i]:15d} {promedio_lote:15.2f} {categoria:<15}")
        promedio_por_producto.append(promedio_lote)

    # ========= RESUMEN =========

    producto_mayor_cantidades = 0
    producto_menor_cantidades = 0

    for i in range(3):
        if cantidad_unidades[i] > producto_mayor_cantidades:
            producto_mayor_cantidades = cantidad_unidades[i]
            producto_menor_cantidades = i

    mayor_lotes = 0
    menor_lotes = 0

    for i in range(3):
        if lotes[i] > mayor_lotes:
            mayor_lotes = lotes[i]
            menor_lotes = i

    if total_lotes == 0:
        promedio_general = 0
    else:
        promedio_general = total_unidades / total_lotes

    print("Producto mayor cantidades:", productos_agroindustriales(producto_menor_cantidades + 1))
    print("Producto con mas lotes:", productos_agroindustriales(menor_lotes + 1))
    print("Promedio de productos producidos:", round(promedio_general, 2))


# ejecutar
linea_produccion()