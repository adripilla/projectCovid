import json
import matplotlib.pyplot as plt2

# Cargar datos desde un archivo JSON externo
with open('generoArray.jsonld', 'r') as file:
    jsonld_data = json.load(file)

# Extraer datos de edad y frecuencia
edades = [item["sexo"] for item in jsonld_data["@graph"]]
frecuencias = [item["frecuencia"] for item in jsonld_data["@graph"]]

# Crear la gráfica
plt2.figure(figsize=(10, 6))
plt2.plot(edades, frecuencias, marker='o', linestyle='-')
plt2.title('Frecuencia por genero del covid')
plt2.xlabel('genero')
plt2.ylabel('Frecuencia')
plt2.grid(True)

# Mostrar la gráfica
plt2.show()
