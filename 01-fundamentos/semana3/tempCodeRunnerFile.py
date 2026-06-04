def nombre_producto(codigo):
    if codigo == 1: return "Fertilizante"
    if codigo == 2: return "Insecticida"
    if codigo == 3: return "Herbicida"
    return "Desconocido"


def main():
    # Variables separadas (más fácil de entender)
    lotes_fert = 0
    lotes_ins = 0
    lotes_her = 0
    
    unidades_fert = 0
    unidades_ins = 0
    unidades_her = 0
    
    total_lotes_general = 0
    total_unidades_general = 0

    while True:
        dato = input()
        
        if dato.upper() == "FIN":
            break

        # Validación básica (sin isdigit)
        if len(dato) != 5:
            print("Dato invalido debe tener unicamente 5 digitos")
            continue
        
        try:
            codigo = int(dato[0])
            cantidad = int(dato[1:4])
        except ValueError:
            print("Dato invalido debe tener unicamente 5 digitos")
            continue

        if codigo < 1 or codigo > 3:
            print("Dato invalido debe tener unicamente 5 digitos")
            continue

        # === Aquí guardamos según el código (más claro) ===
        if codigo == 1:      # Fertilizante
            lotes_fert += 1
            unidades_fert += cantidad
        elif codigo == 2:    # Insecticida
            lotes_ins += 1
            unidades_ins += cantidad
        elif codigo == 3:    # Herbicida
            lotes_her += 1
            unidades_her += cantidad

        total_lotes_general += 1
        total_unidades_general += cantidad

    # --- Cálculo de máximos ---
    # Producto con mayor cantidad de unidades
    max_unidades = max(unidades_fert, unidades_ins, unidades_her)
    if max_unidades == unidades_fert:
        prod_mayor_cant = "Fertilizante"
    elif max_unidades == unidades_ins:
        prod_mayor_cant = "Insecticida"
    else:
        prod_mayor_cant = "Herbicida"

    # Producto con más lotes
    max_lotes = max(lotes_fert, lotes_ins, lotes_her)
    if max_lotes == lotes_fert:
        prod_mas_lotes = "Fertilizante"
    elif max_lotes == lotes_ins:
        prod_mas_lotes = "Insecticida"
    else:
        prod_mas_lotes = "Herbicida"

    # Promedio general
    promedio_general = 0
    if total_lotes_general > 0:
        promedio_general = total_unidades_general / total_lotes_general

    # --- IMPRESIÓN FINAL ---
    print(f"\nProducto mayor cantidades: {prod_mayor_cant}")
    print(f"Producto con mas lotes: {prod_mas_lotes}")
    print(f"Promedio de productos producidos: {promedio_general:.2f}")


main()